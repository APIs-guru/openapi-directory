from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TokensApplyMissingPartnerOffersWithoutClaimPathParams:
    partner_application_id: int = field(metadata={'path_param': { 'field_name': 'partnerApplicationId', 'style': 'simple', 'explode': False }})
    target_bnet_membership_id: int = field(metadata={'path_param': { 'field_name': 'targetBnetMembershipId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TokensApplyMissingPartnerOffersWithoutClaimSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TokensApplyMissingPartnerOffersWithoutClaimRequest:
    path_params: TokensApplyMissingPartnerOffersWithoutClaimPathParams = field()
    security: TokensApplyMissingPartnerOffersWithoutClaimSecurity = field()
    

@dataclass
class TokensApplyMissingPartnerOffersWithoutClaimResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
