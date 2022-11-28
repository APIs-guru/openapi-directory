from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class DeleteProjectUsernameProjectEnvvarNamePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class DeleteProjectUsernameProjectEnvvarName200ApplicationJSONMessageEnum(str, Enum):
    OK = "OK"


@dataclass_json
@dataclass
class DeleteProjectUsernameProjectEnvvarName200ApplicationJSON:
    message: Optional[DeleteProjectUsernameProjectEnvvarName200ApplicationJSONMessageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteProjectUsernameProjectEnvvarNameRequest:
    path_params: DeleteProjectUsernameProjectEnvvarNamePathParams = field()
    

@dataclass
class DeleteProjectUsernameProjectEnvvarNameResponse:
    content_type: str = field()
    status_code: int = field()
    delete_project_username_project_envvar_name_200_application_json_object: Optional[DeleteProjectUsernameProjectEnvvarName200ApplicationJSON] = field(default=None)
    
