from dataclasses import dataclass, field



@dataclass
class TokensGetPartnerOfferSkuHistoryPathParams:
    partner_application_id: int = field(default=None, metadata={'path_param': { 'field_name': 'partnerApplicationId', 'style': 'simple', 'explode': False }})
    target_bnet_membership_id: int = field(default=None, metadata={'path_param': { 'field_name': 'targetBnetMembershipId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TokensGetPartnerOfferSkuHistorySecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TokensGetPartnerOfferSkuHistoryRequest:
    path_params: TokensGetPartnerOfferSkuHistoryPathParams = field(default=None)
    security: TokensGetPartnerOfferSkuHistorySecurity = field(default=None)
    

@dataclass
class TokensGetPartnerOfferSkuHistoryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
