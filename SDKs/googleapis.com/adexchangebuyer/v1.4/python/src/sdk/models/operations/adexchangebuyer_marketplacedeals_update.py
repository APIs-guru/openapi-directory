from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AdexchangebuyerMarketplacedealsUpdatePathParams:
    proposal_id: str = field(metadata={'path_param': { 'field_name': 'proposalId', 'style': 'simple', 'explode': False }})
    

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
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdexchangebuyerMarketplacedealsUpdateRequest:
    path_params: AdexchangebuyerMarketplacedealsUpdatePathParams = field()
    query_params: AdexchangebuyerMarketplacedealsUpdateQueryParams = field()
    security: AdexchangebuyerMarketplacedealsUpdateSecurity = field()
    request: Optional[shared.EditAllOrderDealsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AdexchangebuyerMarketplacedealsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    edit_all_order_deals_response: Optional[shared.EditAllOrderDealsResponse] = field(default=None)
    
