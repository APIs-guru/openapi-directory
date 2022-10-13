from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPaymentsProgramPathParams:
    marketplace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    payments_program_type: str = field(default=None, metadata={'path_param': { 'field_name': 'payments_program_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentsProgramSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentsProgramRequest:
    path_params: GetPaymentsProgramPathParams = field(default=None)
    security: GetPaymentsProgramSecurity = field(default=None)
    

@dataclass
class GetPaymentsProgramResponse:
    content_type: str = field(default=None)
    payments_program_response: Optional[shared.PaymentsProgramResponse] = field(default=None)
    status_code: int = field(default=None)
    
