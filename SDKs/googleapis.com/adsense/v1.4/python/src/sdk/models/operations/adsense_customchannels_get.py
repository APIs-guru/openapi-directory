from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AdsenseCustomchannelsGetPathParams:
    ad_client_id: str = field(metadata={'path_param': { 'field_name': 'adClientId', 'style': 'simple', 'explode': False }})
    custom_channel_id: str = field(metadata={'path_param': { 'field_name': 'customChannelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AdsenseCustomchannelsGetQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AdsenseCustomchannelsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdsenseCustomchannelsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdsenseCustomchannelsGetSecurity:
    option1: Optional[AdsenseCustomchannelsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AdsenseCustomchannelsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AdsenseCustomchannelsGetRequest:
    path_params: AdsenseCustomchannelsGetPathParams = field()
    query_params: AdsenseCustomchannelsGetQueryParams = field()
    security: AdsenseCustomchannelsGetSecurity = field()
    

@dataclass
class AdsenseCustomchannelsGetResponse:
    content_type: str = field()
    status_code: int = field()
    custom_channel: Optional[shared.CustomChannel] = field(default=None)
    
