from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class DirectoryUsersWatchEventEnum(str, Enum):
    ADD = "add"
    DELETE = "delete"
    MAKE_ADMIN = "makeAdmin"
    UNDELETE = "undelete"
    UPDATE = "update"

class DirectoryUsersWatchOrderByEnum(str, Enum):
    EMAIL = "email"
    FAMILY_NAME = "familyName"
    GIVEN_NAME = "givenName"

class DirectoryUsersWatchProjectionEnum(str, Enum):
    BASIC = "basic"
    CUSTOM = "custom"
    FULL = "full"

class DirectoryUsersWatchSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

class DirectoryUsersWatchViewTypeEnum(str, Enum):
    ADMIN_VIEW = "admin_view"
    DOMAIN_PUBLIC = "domain_public"


@dataclass
class DirectoryUsersWatchQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    custom_field_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customFieldMask', 'style': 'form', 'explode': True }})
    customer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customer', 'style': 'form', 'explode': True }})
    domain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    event: Optional[DirectoryUsersWatchEventEnum] = field(default=None, metadata={'query_param': { 'field_name': 'event', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[DirectoryUsersWatchOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[DirectoryUsersWatchProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    show_deleted: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'showDeleted', 'style': 'form', 'explode': True }})
    sort_order: Optional[DirectoryUsersWatchSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view_type: Optional[DirectoryUsersWatchViewTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'viewType', 'style': 'form', 'explode': True }})
    

@dataclass
class DirectoryUsersWatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryUsersWatchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryUsersWatchSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryUsersWatchSecurity:
    option1: Optional[DirectoryUsersWatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DirectoryUsersWatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DirectoryUsersWatchSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DirectoryUsersWatchRequest:
    query_params: DirectoryUsersWatchQueryParams = field(default=None)
    request: Optional[shared.Channel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DirectoryUsersWatchSecurity = field(default=None)
    

@dataclass
class DirectoryUsersWatchResponse:
    channel: Optional[shared.Channel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
