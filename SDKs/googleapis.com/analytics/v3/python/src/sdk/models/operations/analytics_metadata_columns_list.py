from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AnalyticsMetadataColumnsListPathParams:
    report_type: str = field(metadata={'path_param': { 'field_name': 'reportType', 'style': 'simple', 'explode': False }})
    

@dataclass
class AnalyticsMetadataColumnsListQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AnalyticsMetadataColumnsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsMetadataColumnsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsMetadataColumnsListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsMetadataColumnsListSecurity:
    option1: Optional[AnalyticsMetadataColumnsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AnalyticsMetadataColumnsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[AnalyticsMetadataColumnsListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AnalyticsMetadataColumnsListRequest:
    path_params: AnalyticsMetadataColumnsListPathParams = field()
    query_params: AnalyticsMetadataColumnsListQueryParams = field()
    security: AnalyticsMetadataColumnsListSecurity = field()
    

@dataclass
class AnalyticsMetadataColumnsListResponse:
    content_type: str = field()
    status_code: int = field()
    columns: Optional[shared.Columns] = field(default=None)
    
