from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class AdexchangebuyerMarketplacedealsUpdatePathParams:
    proposal_id: str = field(default=None, metadata={'path_param': { 'field_name': 'proposalId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AdexchangebuyerMarketplacedealsUpdateQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AdexchangebuyerMarketplacedealsUpdateSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdexchangebuyerMarketplacedealsUpdateRequest:
    path_params: AdexchangebuyerMarketplacedealsUpdatePathParams = field(default=None)
    query_params: AdexchangebuyerMarketplacedealsUpdateQueryParams = field(default=None)
    request: Optional[shared.EditAllOrderDealsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AdexchangebuyerMarketplacedealsUpdateSecurity = field(default=None)
    

@dataclass
class AdexchangebuyerMarketplacedealsUpdateResponse:
    content_type: str = field(default=None)
    edit_all_order_deals_response: Optional[shared.EditAllOrderDealsResponse] = field(default=None)
    status_code: int = field(default=None)
    
