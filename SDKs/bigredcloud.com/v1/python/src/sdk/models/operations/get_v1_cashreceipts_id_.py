from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1CashReceiptsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1CashReceiptsIDRequest:
    path_params: GetV1CashReceiptsIDPathParams = field()
    

@dataclass
class GetV1CashReceiptsIDResponse:
    content_type: str = field()
    status_code: int = field()
    cash_receipt_dto: Optional[shared.CashReceiptDto] = field(default=None)
    
