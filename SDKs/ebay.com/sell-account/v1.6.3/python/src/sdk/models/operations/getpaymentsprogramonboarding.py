from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPaymentsProgramOnboardingPathParams:
    marketplace_id: str = field(metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    payments_program_type: str = field(metadata={'path_param': { 'field_name': 'payments_program_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentsProgramOnboardingSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentsProgramOnboardingRequest:
    path_params: GetPaymentsProgramOnboardingPathParams = field()
    security: GetPaymentsProgramOnboardingSecurity = field()
    

@dataclass
class GetPaymentsProgramOnboardingResponse:
    content_type: str = field()
    status_code: int = field()
    payments_program_onboarding_response: Optional[shared.PaymentsProgramOnboardingResponse] = field(default=None)
    
