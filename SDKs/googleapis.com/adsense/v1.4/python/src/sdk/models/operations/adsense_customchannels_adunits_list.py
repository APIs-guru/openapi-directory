from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AdsenseCustomchannelsAdunitsListPathParams:
    ad_client_id: str = field(metadata={'path_param': { 'field_name': 'adClientId', 'style': 'simple', 'explode': False }})
    custom_channel_id: str = field(metadata={'path_param': { 'field_name': 'customChannelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AdsenseCustomchannelsAdunitsListQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_inactive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeInactive', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AdsenseCustomchannelsAdunitsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdsenseCustomchannelsAdunitsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdsenseCustomchannelsAdunitsListSecurity:
    option1: Optional[AdsenseCustomchannelsAdunitsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AdsenseCustomchannelsAdunitsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AdsenseCustomchannelsAdunitsListRequest:
    path_params: AdsenseCustomchannelsAdunitsListPathParams = field()
    query_params: AdsenseCustomchannelsAdunitsListQueryParams = field()
    security: AdsenseCustomchannelsAdunitsListSecurity = field()
    

@dataclass
class AdsenseCustomchannelsAdunitsListResponse:
    content_type: str = field()
    status_code: int = field()
    ad_units: Optional[shared.AdUnits] = field(default=None)
    
