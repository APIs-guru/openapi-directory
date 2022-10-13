from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposRemoveStatusCheckContextsPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposRemoveStatusCheckContextsRequestBody1:
    contexts: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contexts' }})
    

@dataclass
class ReposRemoveStatusCheckContextsRequest:
    path_params: ReposRemoveStatusCheckContextsPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposRemoveStatusCheckContextsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    repos_remove_status_check_contexts_200_application_json_strings: Optional[List[str]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
