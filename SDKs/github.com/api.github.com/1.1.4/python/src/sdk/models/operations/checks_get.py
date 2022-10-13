from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChecksGetPathParams:
    check_run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'check_run_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChecksGetRequest:
    path_params: ChecksGetPathParams = field(default=None)
    

@dataclass
class ChecksGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    check_run: Optional[shared.CheckRun] = field(default=None)
    
