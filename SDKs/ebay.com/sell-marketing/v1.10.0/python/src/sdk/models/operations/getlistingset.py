from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetListingSetPathParams:
    promotion_id: str = field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingSetQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingSetSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetListingSetRequest:
    path_params: GetListingSetPathParams = field()
    query_params: GetListingSetQueryParams = field()
    security: GetListingSetSecurity = field()
    

@dataclass
class GetListingSetResponse:
    content_type: str = field()
    status_code: int = field()
    
