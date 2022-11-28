from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposSetStatusCheckContextsPathParams:
    branch: str = field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposSetStatusCheckContextsRequestBody:
    contexts: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    

@dataclass
class ReposSetStatusCheckContextsRequest:
    path_params: ReposSetStatusCheckContextsPathParams = field()
    request: Optional[ReposSetStatusCheckContextsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposSetStatusCheckContextsResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    repos_set_status_check_contexts_200_application_json_strings: Optional[List[str]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
