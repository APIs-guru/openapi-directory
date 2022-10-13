from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Tag:
    dollar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': '$id' }})
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    date_created: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated' }})
    function_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionId' }})
    size: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    
