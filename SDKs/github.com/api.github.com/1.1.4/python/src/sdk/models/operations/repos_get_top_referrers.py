from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReposGetTopReferrersPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetTopReferrersRequest:
    path_params: ReposGetTopReferrersPathParams = field(default=None)
    

@dataclass
class ReposGetTopReferrersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    referrer_traffics: Optional[List[shared.ReferrerTraffic]] = field(default=None)
    
