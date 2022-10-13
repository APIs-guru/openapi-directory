from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteProjectUsernameProjectEnvvarNamePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProjectUsernameProjectEnvvarNameRequest:
    path_params: DeleteProjectUsernameProjectEnvvarNamePathParams = field(default=None)
    
class DeleteProjectUsernameProjectEnvvarName200ApplicationJSONMessageEnum(str, Enum):
    OK = "OK"


@dataclass_json
@dataclass
class DeleteProjectUsernameProjectEnvvarName200ApplicationJSON:
    message: Optional[DeleteProjectUsernameProjectEnvvarName200ApplicationJSONMessageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteProjectUsernameProjectEnvvarNameResponse:
    content_type: str = field(default=None)
    delete_project_username_project_envvar_name_200_application_json_object: Optional[DeleteProjectUsernameProjectEnvvarName200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
