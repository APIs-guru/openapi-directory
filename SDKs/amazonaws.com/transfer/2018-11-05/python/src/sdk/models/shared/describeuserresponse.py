from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import describeduser


@dataclass_json
@dataclass
class DescribeUserResponse:
    server_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerId' }})
    user: describeduser.DescribedUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'User' }})
    
