from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetInvoicesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvoicesIDRequest:
    path_params: GetInvoicesIDPathParams = field()
    

@dataclass
class GetInvoicesIDResponse:
    content_type: str = field()
    status_code: int = field()
    account_line_item_entity: Optional[shared.AccountLineItemEntity] = field(default=None)
    
