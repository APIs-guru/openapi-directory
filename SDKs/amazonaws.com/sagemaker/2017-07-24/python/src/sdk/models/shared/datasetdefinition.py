from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatasetDefinition:
    r"""DatasetDefinition
    Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either <code>AthenaDatasetDefinition</code> or <code>RedshiftDatasetDefinition</code> types.
    """
    
    athena_dataset_definition: Optional[AthenaDatasetDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AthenaDatasetDefinition') }})
    data_distribution_type: Optional[DataDistributionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataDistributionType') }})
    input_mode: Optional[InputModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputMode') }})
    local_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalPath') }})
    redshift_dataset_definition: Optional[RedshiftDatasetDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftDatasetDefinition') }})
    
