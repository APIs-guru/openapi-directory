from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class AnalyticsManagementRemarketingAudiencePatchPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    remarketing_audience_id: str = field(default=None, metadata={'path_param': { 'field_name': 'remarketingAudienceId', 'style': 'simple', 'explode': False }})
    web_property_id: str = field(default=None, metadata={'path_param': { 'field_name': 'webPropertyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AnalyticsManagementRemarketingAudiencePatchQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AnalyticsManagementRemarketingAudiencePatchSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsManagementRemarketingAudiencePatchRequest:
    path_params: AnalyticsManagementRemarketingAudiencePatchPathParams = field(default=None)
    query_params: AnalyticsManagementRemarketingAudiencePatchQueryParams = field(default=None)
    request: Optional[shared.RemarketingAudience] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AnalyticsManagementRemarketingAudiencePatchSecurity = field(default=None)
    

@dataclass
class AnalyticsManagementRemarketingAudiencePatchResponse:
    content_type: str = field(default=None)
    remarketing_audience: Optional[shared.RemarketingAudience] = field(default=None)
    status_code: int = field(default=None)
    
