from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AnalyticsManagementProfilesInsertPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    web_property_id: str = field(metadata={'path_param': { 'field_name': 'webPropertyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AnalyticsManagementProfilesInsertQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AnalyticsManagementProfilesInsertSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsManagementProfilesInsertRequest:
    path_params: AnalyticsManagementProfilesInsertPathParams = field()
    query_params: AnalyticsManagementProfilesInsertQueryParams = field()
    security: AnalyticsManagementProfilesInsertSecurity = field()
    request: Optional[shared.ProfileInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AnalyticsManagementProfilesInsertResponse:
    content_type: str = field()
    status_code: int = field()
    profile: Optional[shared.Profile] = field(default=None)
    
