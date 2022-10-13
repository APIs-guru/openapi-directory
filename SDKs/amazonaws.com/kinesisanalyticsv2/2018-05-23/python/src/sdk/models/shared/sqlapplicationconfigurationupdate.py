from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inputupdate
from . import outputupdate
from . import referencedatasourceupdate


@dataclass_json
@dataclass
class SQLApplicationConfigurationUpdate:
    input_updates: Optional[List[inputupdate.InputUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputUpdates' }})
    output_updates: Optional[List[outputupdate.OutputUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputUpdates' }})
    reference_data_source_updates: Optional[List[referencedatasourceupdate.ReferenceDataSourceUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceDataSourceUpdates' }})
    
