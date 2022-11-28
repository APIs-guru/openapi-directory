from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChecksGetSuitePathParams:
    check_suite_id: int = field(metadata={'path_param': { 'field_name': 'check_suite_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChecksGetSuiteRequest:
    path_params: ChecksGetSuitePathParams = field()
    

@dataclass
class ChecksGetSuiteResponse:
    content_type: str = field()
    status_code: int = field()
    check_suite: Optional[shared.CheckSuite] = field(default=None)
    
