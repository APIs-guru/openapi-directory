from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class ReportsActivitiesListApplicationNameEnum(str, Enum):
    ACCESS_TRANSPARENCY = "access_transparency"
    ADMIN = "admin"
    CALENDAR = "calendar"
    CHAT = "chat"
    DRIVE = "drive"
    GCP = "gcp"
    GPLUS = "gplus"
    GROUPS = "groups"
    GROUPS_ENTERPRISE = "groups_enterprise"
    JAMBOARD = "jamboard"
    LOGIN = "login"
    MEET = "meet"
    MOBILE = "mobile"
    RULES = "rules"
    SAML = "saml"
    TOKEN = "token"
    USER_ACCOUNTS = "user_accounts"
    CONTEXT_AWARE_ACCESS = "context_aware_access"
    CHROME = "chrome"
    DATA_STUDIO = "data_studio"
    KEEP = "keep"


@dataclass
class ReportsActivitiesListPathParams:
    application_name: ReportsActivitiesListApplicationNameEnum = field(metadata={'path_param': { 'field_name': 'applicationName', 'style': 'simple', 'explode': False }})
    user_key: str = field(metadata={'path_param': { 'field_name': 'userKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReportsActivitiesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    actor_ip_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'actorIpAddress', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    customer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customerId', 'style': 'form', 'explode': True }})
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    event_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'eventName', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filters: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filters', 'style': 'form', 'explode': True }})
    group_id_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupIdFilter', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    org_unit_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orgUnitID', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    start_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportsActivitiesListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReportsActivitiesListRequest:
    path_params: ReportsActivitiesListPathParams = field()
    query_params: ReportsActivitiesListQueryParams = field()
    security: ReportsActivitiesListSecurity = field()
    

@dataclass
class ReportsActivitiesListResponse:
    content_type: str = field()
    status_code: int = field()
    activities: Optional[shared.Activities] = field(default=None)
    
