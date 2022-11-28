from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChecksGetPathParams:
    check_run_id: int = field(metadata={'path_param': { 'field_name': 'check_run_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChecksGetRequest:
    path_params: ChecksGetPathParams = field()
    

@dataclass
class ChecksGetResponse:
    content_type: str = field()
    status_code: int = field()
    check_run: Optional[shared.CheckRun] = field(default=None)
    
