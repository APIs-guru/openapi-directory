from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import athenadatasetdefinition
from . import datadistributiontype_enum
from . import inputmode_enum
from . import redshiftdatasetdefinition


@dataclass_json
@dataclass
class DatasetDefinition:
    athena_dataset_definition: Optional[athenadatasetdefinition.AthenaDatasetDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AthenaDatasetDefinition' }})
    data_distribution_type: Optional[datadistributiontype_enum.DataDistributionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataDistributionType' }})
    input_mode: Optional[inputmode_enum.InputModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputMode' }})
    local_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalPath' }})
    redshift_dataset_definition: Optional[redshiftdatasetdefinition.RedshiftDatasetDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedshiftDatasetDefinition' }})
    
