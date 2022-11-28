from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AnalyticsManagementUploadsListPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    custom_data_source_id: str = field(metadata={'path_param': { 'field_name': 'customDataSourceId', 'style': 'simple', 'explode': False }})
    web_property_id: str = field(metadata={'path_param': { 'field_name': 'webPropertyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AnalyticsManagementUploadsListQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max-results', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start-index', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AnalyticsManagementUploadsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsManagementUploadsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsManagementUploadsListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsManagementUploadsListSecurity:
    option1: Optional[AnalyticsManagementUploadsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AnalyticsManagementUploadsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[AnalyticsManagementUploadsListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AnalyticsManagementUploadsListRequest:
    path_params: AnalyticsManagementUploadsListPathParams = field()
    query_params: AnalyticsManagementUploadsListQueryParams = field()
    security: AnalyticsManagementUploadsListSecurity = field()
    

@dataclass
class AnalyticsManagementUploadsListResponse:
    content_type: str = field()
    status_code: int = field()
    uploads: Optional[shared.Uploads] = field(default=None)
    
