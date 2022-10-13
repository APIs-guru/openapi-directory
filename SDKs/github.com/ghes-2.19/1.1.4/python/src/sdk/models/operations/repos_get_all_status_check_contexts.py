from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReposGetAllStatusCheckContextsPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetAllStatusCheckContextsRequest:
    path_params: ReposGetAllStatusCheckContextsPathParams = field(default=None)
    

@dataclass
class ReposGetAllStatusCheckContextsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    repos_get_all_status_check_contexts_200_application_json_strings: Optional[List[str]] = field(default=None)
    
