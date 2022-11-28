from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBlockedNumbersQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    min_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'min-id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBlockedNumbersSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetBlockedNumbersRequest:
    query_params: GetBlockedNumbersQueryParams = field()
    security: GetBlockedNumbersSecurity = field()
    

@dataclass
class GetBlockedNumbersResponse:
    content_type: str = field()
    status_code: int = field()
    blocked_number: Optional[shared.BlockedNumber] = field(default=None)
    
