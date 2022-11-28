from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AnalyticsManagementUnsampledReportsInsertPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    profile_id: str = field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    web_property_id: str = field(metadata={'path_param': { 'field_name': 'webPropertyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AnalyticsManagementUnsampledReportsInsertQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AnalyticsManagementUnsampledReportsInsertSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsManagementUnsampledReportsInsertSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsManagementUnsampledReportsInsertSecurity:
    option1: Optional[AnalyticsManagementUnsampledReportsInsertSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AnalyticsManagementUnsampledReportsInsertSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AnalyticsManagementUnsampledReportsInsertRequest:
    path_params: AnalyticsManagementUnsampledReportsInsertPathParams = field()
    query_params: AnalyticsManagementUnsampledReportsInsertQueryParams = field()
    security: AnalyticsManagementUnsampledReportsInsertSecurity = field()
    request: Optional[shared.UnsampledReportInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AnalyticsManagementUnsampledReportsInsertResponse:
    content_type: str = field()
    status_code: int = field()
    unsampled_report: Optional[shared.UnsampledReport] = field(default=None)
    
