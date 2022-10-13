from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPaymentsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentsIDRequest:
    path_params: GetPaymentsIDPathParams = field(default=None)
    

@dataclass
class GetPaymentsIDResponse:
    account_line_item_entity: Optional[shared.AccountLineItemEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
