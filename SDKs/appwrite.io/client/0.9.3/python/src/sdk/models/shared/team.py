from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Team:
    dollar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': '$id' }})
    date_created: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sum: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    
