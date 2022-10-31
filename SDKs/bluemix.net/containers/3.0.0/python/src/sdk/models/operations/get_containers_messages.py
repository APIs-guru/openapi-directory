from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetContainersMessagesHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContainersMessagesRequest:
    headers: GetContainersMessagesHeaders = field(default=None)
    

@dataclass_json
@dataclass
class GetContainersMessages200ApplicationJSON:
    created_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_date' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetContainersMessagesResponse:
    content_type: str = field(default=None)
    get_containers_messages_200_application_json_object: Optional[GetContainersMessages200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
