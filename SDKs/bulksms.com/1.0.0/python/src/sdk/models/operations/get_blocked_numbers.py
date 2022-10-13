from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBlockedNumbersQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    min_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'min-id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBlockedNumbersSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetBlockedNumbersRequest:
    query_params: GetBlockedNumbersQueryParams = field(default=None)
    security: GetBlockedNumbersSecurity = field(default=None)
    

@dataclass
class GetBlockedNumbersResponse:
    blocked_number: Optional[shared.BlockedNumber] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
