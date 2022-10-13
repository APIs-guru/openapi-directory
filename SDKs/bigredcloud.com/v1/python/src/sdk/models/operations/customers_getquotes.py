from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CustomersGetQuotesPathParams:
    item_id: int = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CustomersGetQuotesRequest:
    path_params: CustomersGetQuotesPathParams = field(default=None)
    

@dataclass
class CustomersGetQuotesResponse:
    content_type: str = field(default=None)
    quote_dtos: Optional[List[shared.QuoteDto]] = field(default=None)
    status_code: int = field(default=None)
    
