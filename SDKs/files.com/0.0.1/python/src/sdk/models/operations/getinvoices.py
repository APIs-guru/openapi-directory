from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetInvoicesQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInvoicesRequest:
    query_params: GetInvoicesQueryParams = field(default=None)
    

@dataclass
class GetInvoicesResponse:
    account_line_item_entities: Optional[List[shared.AccountLineItemEntity]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
