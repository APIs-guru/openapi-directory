from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1CashPaymentsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1CashPaymentsIDRequest:
    path_params: GetV1CashPaymentsIDPathParams = field(default=None)
    

@dataclass
class GetV1CashPaymentsIDResponse:
    cash_payment_dto: Optional[shared.CashPaymentDto] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
