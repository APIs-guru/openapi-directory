from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPaymentsProgramPathParams:
    marketplace_id: str = field(metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    payments_program_type: str = field(metadata={'path_param': { 'field_name': 'payments_program_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentsProgramSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentsProgramRequest:
    path_params: GetPaymentsProgramPathParams = field()
    security: GetPaymentsProgramSecurity = field()
    

@dataclass
class GetPaymentsProgramResponse:
    content_type: str = field()
    status_code: int = field()
    payments_program_response: Optional[shared.PaymentsProgramResponse] = field(default=None)
    
