from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayoutsQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPayoutsSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPayoutsRequest:
    query_params: GetPayoutsQueryParams = field(default=None)
    security: GetPayoutsSecurity = field(default=None)
    

@dataclass
class GetPayoutsResponse:
    content_type: str = field(default=None)
    payouts: Optional[shared.Payouts] = field(default=None)
    status_code: int = field(default=None)
    
