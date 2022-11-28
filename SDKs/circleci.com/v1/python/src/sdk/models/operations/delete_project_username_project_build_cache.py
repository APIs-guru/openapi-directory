from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class DeleteProjectUsernameProjectBuildCachePathParams:
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DeleteProjectUsernameProjectBuildCache200ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class DeleteProjectUsernameProjectBuildCacheRequest:
    path_params: DeleteProjectUsernameProjectBuildCachePathParams = field()
    

@dataclass
class DeleteProjectUsernameProjectBuildCacheResponse:
    content_type: str = field()
    status_code: int = field()
    delete_project_username_project_build_cache_200_application_json_object: Optional[DeleteProjectUsernameProjectBuildCache200ApplicationJSON] = field(default=None)
    
