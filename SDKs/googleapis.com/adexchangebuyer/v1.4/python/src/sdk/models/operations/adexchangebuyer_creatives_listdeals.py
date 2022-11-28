from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AdexchangebuyerCreativesListDealsPathParams:
    account_id: int = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    buyer_creative_id: str = field(metadata={'path_param': { 'field_name': 'buyerCreativeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AdexchangebuyerCreativesListDealsQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AdexchangebuyerCreativesListDealsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdexchangebuyerCreativesListDealsRequest:
    path_params: AdexchangebuyerCreativesListDealsPathParams = field()
    query_params: AdexchangebuyerCreativesListDealsQueryParams = field()
    security: AdexchangebuyerCreativesListDealsSecurity = field()
    

@dataclass
class AdexchangebuyerCreativesListDealsResponse:
    content_type: str = field()
    status_code: int = field()
    creative_deal_ids: Optional[shared.CreativeDealIds] = field(default=None)
    
