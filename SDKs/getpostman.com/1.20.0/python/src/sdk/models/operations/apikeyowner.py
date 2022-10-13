from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIKeyOwner200ApplicationJSONOperations:
    limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    overage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overage' }})
    usage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage' }})
    

@dataclass_json
@dataclass
class APIKeyOwner200ApplicationJSONUser:
    avatar: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPublic' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class APIKeyOwner200ApplicationJSON:
    operations: Optional[List[APIKeyOwner200ApplicationJSONOperations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    user: Optional[APIKeyOwner200ApplicationJSONUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass
class APIKeyOwnerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_key_owner_200_application_json_object: Optional[APIKeyOwner200ApplicationJSON] = field(default=None)
    
