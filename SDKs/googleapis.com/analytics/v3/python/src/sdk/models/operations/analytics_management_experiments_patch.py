from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AnalyticsManagementExperimentsPatchPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    experiment_id: str = field(metadata={'path_param': { 'field_name': 'experimentId', 'style': 'simple', 'explode': False }})
    profile_id: str = field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    web_property_id: str = field(metadata={'path_param': { 'field_name': 'webPropertyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AnalyticsManagementExperimentsPatchQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AnalyticsManagementExperimentsPatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsManagementExperimentsPatchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsManagementExperimentsPatchSecurity:
    option1: Optional[AnalyticsManagementExperimentsPatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AnalyticsManagementExperimentsPatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AnalyticsManagementExperimentsPatchRequest:
    path_params: AnalyticsManagementExperimentsPatchPathParams = field()
    query_params: AnalyticsManagementExperimentsPatchQueryParams = field()
    security: AnalyticsManagementExperimentsPatchSecurity = field()
    request: Optional[shared.Experiment] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AnalyticsManagementExperimentsPatchResponse:
    content_type: str = field()
    status_code: int = field()
    experiment: Optional[shared.Experiment] = field(default=None)
    
