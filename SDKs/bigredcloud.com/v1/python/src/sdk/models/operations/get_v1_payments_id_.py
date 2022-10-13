from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1PaymentsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1PaymentsIDRequest:
    path_params: GetV1PaymentsIDPathParams = field(default=None)
    

@dataclass
class GetV1PaymentsIDResponse:
    content_type: str = field(default=None)
    payment_dto: Optional[shared.PaymentDto] = field(default=None)
    status_code: int = field(default=None)
    
