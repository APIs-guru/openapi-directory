from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Token:
    dollar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': '$id' }})
    expire: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expire' }})
    secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
