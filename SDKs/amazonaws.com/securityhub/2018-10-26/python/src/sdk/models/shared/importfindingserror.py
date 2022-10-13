from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImportFindingsError:
    error_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    
