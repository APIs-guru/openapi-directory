from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostProjectUsernameProjectTreeBranchPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostProjectUsernameProjectTreeBranchRequestBody:
    build_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_parameters' }})
    parallel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parallel' }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    

@dataclass
class PostProjectUsernameProjectTreeBranchRequest:
    path_params: PostProjectUsernameProjectTreeBranchPathParams = field(default=None)
    request: Optional[PostProjectUsernameProjectTreeBranchRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProjectUsernameProjectTreeBranchResponse:
    build: Optional[shared.Build] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
