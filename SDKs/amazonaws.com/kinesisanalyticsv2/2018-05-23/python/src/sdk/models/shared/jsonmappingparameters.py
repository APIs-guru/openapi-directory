from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JSONMappingParameters:
    record_row_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordRowPath' }})
    
