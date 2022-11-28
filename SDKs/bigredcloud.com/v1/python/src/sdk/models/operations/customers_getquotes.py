from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CustomersGetQuotesPathParams:
    item_id: int = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CustomersGetQuotesRequest:
    path_params: CustomersGetQuotesPathParams = field()
    

@dataclass
class CustomersGetQuotesResponse:
    content_type: str = field()
    status_code: int = field()
    quote_dtos: Optional[List[shared.QuoteDto]] = field(default=None)
    
