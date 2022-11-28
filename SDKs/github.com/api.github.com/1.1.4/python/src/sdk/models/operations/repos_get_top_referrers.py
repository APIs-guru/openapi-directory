from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReposGetTopReferrersPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetTopReferrersRequest:
    path_params: ReposGetTopReferrersPathParams = field()
    

@dataclass
class ReposGetTopReferrersResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    referrer_traffics: Optional[List[shared.ReferrerTraffic]] = field(default=None)
    
