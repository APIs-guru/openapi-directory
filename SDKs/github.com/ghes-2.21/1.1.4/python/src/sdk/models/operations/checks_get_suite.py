from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChecksGetSuitePathParams:
    check_suite_id: int = field(default=None, metadata={'path_param': { 'field_name': 'check_suite_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChecksGetSuiteRequest:
    path_params: ChecksGetSuitePathParams = field(default=None)
    

@dataclass
class ChecksGetSuiteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    check_suite: Optional[shared.CheckSuite] = field(default=None)
    
