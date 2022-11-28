from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IssuesUnlockPathParams:
    issue_number: int = field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssuesUnlockRequest:
    path_params: IssuesUnlockPathParams = field()
    

@dataclass
class IssuesUnlockResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
