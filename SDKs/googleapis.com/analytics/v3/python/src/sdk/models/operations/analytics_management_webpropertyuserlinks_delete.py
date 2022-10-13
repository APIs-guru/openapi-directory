from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class AnalyticsManagementWebpropertyUserLinksDeletePathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    link_id: str = field(default=None, metadata={'path_param': { 'field_name': 'linkId', 'style': 'simple', 'explode': False }})
    web_property_id: str = field(default=None, metadata={'path_param': { 'field_name': 'webPropertyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AnalyticsManagementWebpropertyUserLinksDeleteQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AnalyticsManagementWebpropertyUserLinksDeleteSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsManagementWebpropertyUserLinksDeleteRequest:
    path_params: AnalyticsManagementWebpropertyUserLinksDeletePathParams = field(default=None)
    query_params: AnalyticsManagementWebpropertyUserLinksDeleteQueryParams = field(default=None)
    security: AnalyticsManagementWebpropertyUserLinksDeleteSecurity = field(default=None)
    

@dataclass
class AnalyticsManagementWebpropertyUserLinksDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
