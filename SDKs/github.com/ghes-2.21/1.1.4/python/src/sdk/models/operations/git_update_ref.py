from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GitUpdateRefPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = field(default=None, metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GitUpdateRefRequestBody:
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'force' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    

@dataclass
class GitUpdateRefRequest:
    path_params: GitUpdateRefPathParams = field(default=None)
    request: Optional[GitUpdateRefRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GitUpdateRefResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    git_ref: Optional[shared.GitRef] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
