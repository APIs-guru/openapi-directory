from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RdsDatabaseCredentials:
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
