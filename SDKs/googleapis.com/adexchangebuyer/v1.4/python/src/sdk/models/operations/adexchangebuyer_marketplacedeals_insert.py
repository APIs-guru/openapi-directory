from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AdexchangebuyerMarketplacedealsInsertPathParams:
    proposal_id: str = field(metadata={'path_param': { 'field_name': 'proposalId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AdexchangebuyerMarketplacedealsInsertQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AdexchangebuyerMarketplacedealsInsertSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdexchangebuyerMarketplacedealsInsertRequest:
    path_params: AdexchangebuyerMarketplacedealsInsertPathParams = field()
    query_params: AdexchangebuyerMarketplacedealsInsertQueryParams = field()
    security: AdexchangebuyerMarketplacedealsInsertSecurity = field()
    request: Optional[shared.AddOrderDealsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AdexchangebuyerMarketplacedealsInsertResponse:
    content_type: str = field()
    status_code: int = field()
    add_order_deals_response: Optional[shared.AddOrderDealsResponse] = field(default=None)
    
