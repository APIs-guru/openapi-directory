from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPaymentsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentsIDRequest:
    path_params: GetPaymentsIDPathParams = field()
    

@dataclass
class GetPaymentsIDResponse:
    content_type: str = field()
    status_code: int = field()
    account_line_item_entity: Optional[shared.AccountLineItemEntity] = field(default=None)
    
