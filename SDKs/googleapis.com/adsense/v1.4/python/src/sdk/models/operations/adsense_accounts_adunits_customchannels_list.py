from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AdsenseAccountsAdunitsCustomchannelsListPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    ad_client_id: str = field(metadata={'path_param': { 'field_name': 'adClientId', 'style': 'simple', 'explode': False }})
    ad_unit_id: str = field(metadata={'path_param': { 'field_name': 'adUnitId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AdsenseAccountsAdunitsCustomchannelsListQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AdsenseAccountsAdunitsCustomchannelsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdsenseAccountsAdunitsCustomchannelsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdsenseAccountsAdunitsCustomchannelsListSecurity:
    option1: Optional[AdsenseAccountsAdunitsCustomchannelsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AdsenseAccountsAdunitsCustomchannelsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AdsenseAccountsAdunitsCustomchannelsListRequest:
    path_params: AdsenseAccountsAdunitsCustomchannelsListPathParams = field()
    query_params: AdsenseAccountsAdunitsCustomchannelsListQueryParams = field()
    security: AdsenseAccountsAdunitsCustomchannelsListSecurity = field()
    

@dataclass
class AdsenseAccountsAdunitsCustomchannelsListResponse:
    content_type: str = field()
    status_code: int = field()
    custom_channels: Optional[shared.CustomChannels] = field(default=None)
    
