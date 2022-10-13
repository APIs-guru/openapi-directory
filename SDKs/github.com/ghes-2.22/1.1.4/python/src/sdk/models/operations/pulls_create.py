from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PullsCreatePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PullsCreateRequestBody:
    base: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    draft: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'draft' }})
    head: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head' }})
    issue: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue' }})
    maintainer_can_modify: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintainer_can_modify' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class PullsCreateRequest:
    path_params: PullsCreatePathParams = field(default=None)
    request: Optional[PullsCreateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PullsCreateResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    pull_request: Optional[shared.PullRequest] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
