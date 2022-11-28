from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AdexchangebuyerCreativesAddDealPathParams:
    account_id: int = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    buyer_creative_id: str = field(metadata={'path_param': { 'field_name': 'buyerCreativeId', 'style': 'simple', 'explode': False }})
    deal_id: str = field(metadata={'path_param': { 'field_name': 'dealId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AdexchangebuyerCreativesAddDealQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AdexchangebuyerCreativesAddDealSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdexchangebuyerCreativesAddDealRequest:
    path_params: AdexchangebuyerCreativesAddDealPathParams = field()
    query_params: AdexchangebuyerCreativesAddDealQueryParams = field()
    security: AdexchangebuyerCreativesAddDealSecurity = field()
    

@dataclass
class AdexchangebuyerCreativesAddDealResponse:
    content_type: str = field()
    status_code: int = field()
    
