from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1CashPaymentsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1CashPaymentsIDRequest:
    path_params: GetV1CashPaymentsIDPathParams = field()
    

@dataclass
class GetV1CashPaymentsIDResponse:
    content_type: str = field()
    status_code: int = field()
    cash_payment_dto: Optional[shared.CashPaymentDto] = field(default=None)
    
