from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteProjectUsernameProjectBuildCachePathParams:
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProjectUsernameProjectBuildCacheRequest:
    path_params: DeleteProjectUsernameProjectBuildCachePathParams = field(default=None)
    

@dataclass_json
@dataclass
class DeleteProjectUsernameProjectBuildCache200ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class DeleteProjectUsernameProjectBuildCacheResponse:
    content_type: str = field(default=None)
    delete_project_username_project_build_cache_200_application_json_object: Optional[DeleteProjectUsernameProjectBuildCache200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
