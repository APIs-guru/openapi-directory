from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class AppsactivityActivitiesListGroupingStrategyEnum(str, Enum):
    DRIVE_UI = "driveUi"
    NONE = "none"


@dataclass
class AppsactivityActivitiesListQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    drive_ancestor_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'drive.ancestorId', 'style': 'form', 'explode': True }})
    drive_file_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'drive.fileId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    grouping_strategy: Optional[AppsactivityActivitiesListGroupingStrategyEnum] = field(default=None, metadata={'query_param': { 'field_name': 'groupingStrategy', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    source: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AppsactivityActivitiesListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AppsactivityActivitiesListRequest:
    query_params: AppsactivityActivitiesListQueryParams = field()
    security: AppsactivityActivitiesListSecurity = field()
    

@dataclass
class AppsactivityActivitiesListResponse:
    content_type: str = field()
    status_code: int = field()
    list_activities_response: Optional[shared.ListActivitiesResponse] = field(default=None)
    
