from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1PaymentsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1PaymentsIDRequest:
    path_params: GetV1PaymentsIDPathParams = field()
    

@dataclass
class GetV1PaymentsIDResponse:
    content_type: str = field()
    status_code: int = field()
    payment_dto: Optional[shared.PaymentDto] = field(default=None)
    
