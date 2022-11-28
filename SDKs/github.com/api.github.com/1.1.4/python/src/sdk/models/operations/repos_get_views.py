from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ReposGetViewsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetViewsQueryParams:
    per: Optional[shared.PerEnum] = field(default=None, metadata={'query_param': { 'field_name': 'per', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposGetViewsRequest:
    path_params: ReposGetViewsPathParams = field()
    query_params: ReposGetViewsQueryParams = field()
    

@dataclass
class ReposGetViewsResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    view_traffic: Optional[shared.ViewTraffic] = field(default=None)
    
