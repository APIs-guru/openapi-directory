from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubUserJSONWebToken:
    created_on: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdOn' }})
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    end_points: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endPoints' }})
    expires: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    uuid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    
