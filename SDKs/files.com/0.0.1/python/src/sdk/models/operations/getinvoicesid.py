from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetInvoicesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvoicesIDRequest:
    path_params: GetInvoicesIDPathParams = field(default=None)
    

@dataclass
class GetInvoicesIDResponse:
    account_line_item_entity: Optional[shared.AccountLineItemEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
