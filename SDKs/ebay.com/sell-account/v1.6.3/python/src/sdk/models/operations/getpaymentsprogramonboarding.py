from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPaymentsProgramOnboardingPathParams:
    marketplace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    payments_program_type: str = field(default=None, metadata={'path_param': { 'field_name': 'payments_program_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentsProgramOnboardingSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentsProgramOnboardingRequest:
    path_params: GetPaymentsProgramOnboardingPathParams = field(default=None)
    security: GetPaymentsProgramOnboardingSecurity = field(default=None)
    

@dataclass
class GetPaymentsProgramOnboardingResponse:
    content_type: str = field(default=None)
    payments_program_onboarding_response: Optional[shared.PaymentsProgramOnboardingResponse] = field(default=None)
    status_code: int = field(default=None)
    
