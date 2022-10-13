from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostProjectUsernameProjectPathParams:
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostProjectUsernameProjectRequestBody:
    build_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_parameters' }})
    parallel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parallel' }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    

@dataclass
class PostProjectUsernameProjectRequest:
    path_params: PostProjectUsernameProjectPathParams = field(default=None)
    request: Optional[PostProjectUsernameProjectRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProjectUsernameProjectResponse:
    build_summary: Optional[shared.BuildSummary] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
