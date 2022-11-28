from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCharityOrgsQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    registration_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'registration_ids', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCharityOrgsHeaders:
    x_ebay_c_marketplace_id: str = field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCharityOrgsSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCharityOrgsRequest:
    headers: GetCharityOrgsHeaders = field()
    query_params: GetCharityOrgsQueryParams = field()
    security: GetCharityOrgsSecurity = field()
    

@dataclass
class GetCharityOrgsResponse:
    content_type: str = field()
    status_code: int = field()
    charity_search_response: Optional[shared.CharitySearchResponse] = field(default=None)
    
