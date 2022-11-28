from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TokensGetPartnerOfferSkuHistoryPathParams:
    partner_application_id: int = field(metadata={'path_param': { 'field_name': 'partnerApplicationId', 'style': 'simple', 'explode': False }})
    target_bnet_membership_id: int = field(metadata={'path_param': { 'field_name': 'targetBnetMembershipId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TokensGetPartnerOfferSkuHistorySecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TokensGetPartnerOfferSkuHistoryRequest:
    path_params: TokensGetPartnerOfferSkuHistoryPathParams = field()
    security: TokensGetPartnerOfferSkuHistorySecurity = field()
    

@dataclass
class TokensGetPartnerOfferSkuHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
