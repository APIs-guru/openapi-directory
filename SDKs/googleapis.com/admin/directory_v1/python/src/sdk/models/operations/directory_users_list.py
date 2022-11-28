from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class DirectoryUsersListEventEnum(str, Enum):
    ADD = "add"
    DELETE = "delete"
    MAKE_ADMIN = "makeAdmin"
    UNDELETE = "undelete"
    UPDATE = "update"

class DirectoryUsersListOrderByEnum(str, Enum):
    EMAIL = "email"
    FAMILY_NAME = "familyName"
    GIVEN_NAME = "givenName"

class DirectoryUsersListProjectionEnum(str, Enum):
    BASIC = "basic"
    CUSTOM = "custom"
    FULL = "full"

class DirectoryUsersListSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

class DirectoryUsersListViewTypeEnum(str, Enum):
    ADMIN_VIEW = "admin_view"
    DOMAIN_PUBLIC = "domain_public"


@dataclass
class DirectoryUsersListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    custom_field_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customFieldMask', 'style': 'form', 'explode': True }})
    customer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customer', 'style': 'form', 'explode': True }})
    domain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    event: Optional[DirectoryUsersListEventEnum] = field(default=None, metadata={'query_param': { 'field_name': 'event', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[DirectoryUsersListOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[DirectoryUsersListProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    show_deleted: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'showDeleted', 'style': 'form', 'explode': True }})
    sort_order: Optional[DirectoryUsersListSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view_type: Optional[DirectoryUsersListViewTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'viewType', 'style': 'form', 'explode': True }})
    

@dataclass
class DirectoryUsersListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryUsersListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryUsersListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryUsersListSecurity:
    option1: Optional[DirectoryUsersListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DirectoryUsersListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DirectoryUsersListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DirectoryUsersListRequest:
    query_params: DirectoryUsersListQueryParams = field()
    security: DirectoryUsersListSecurity = field()
    

@dataclass
class DirectoryUsersListResponse:
    content_type: str = field()
    status_code: int = field()
    users: Optional[shared.Users] = field(default=None)
    
