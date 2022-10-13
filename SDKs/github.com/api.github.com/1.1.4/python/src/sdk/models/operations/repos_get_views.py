from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class ReposGetViewsPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetViewsQueryParams:
    per: Optional[shared.PerEnum] = field(default=None, metadata={'query_param': { 'field_name': 'per', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposGetViewsRequest:
    path_params: ReposGetViewsPathParams = field(default=None)
    query_params: ReposGetViewsQueryParams = field(default=None)
    

@dataclass
class ReposGetViewsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    view_traffic: Optional[shared.ViewTraffic] = field(default=None)
    
