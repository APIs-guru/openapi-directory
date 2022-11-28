from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DirectoryUsersGetPathParams:
    user_key: str = field(metadata={'path_param': { 'field_name': 'userKey', 'style': 'simple', 'explode': False }})
    
class DirectoryUsersGetProjectionEnum(str, Enum):
    BASIC = "basic"
    CUSTOM = "custom"
    FULL = "full"

class DirectoryUsersGetViewTypeEnum(str, Enum):
    ADMIN_VIEW = "admin_view"
    DOMAIN_PUBLIC = "domain_public"


@dataclass
class DirectoryUsersGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    custom_field_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customFieldMask', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[DirectoryUsersGetProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view_type: Optional[DirectoryUsersGetViewTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'viewType', 'style': 'form', 'explode': True }})
    

@dataclass
class DirectoryUsersGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryUsersGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryUsersGetSecurity:
    option1: Optional[DirectoryUsersGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DirectoryUsersGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DirectoryUsersGetRequest:
    path_params: DirectoryUsersGetPathParams = field()
    query_params: DirectoryUsersGetQueryParams = field()
    security: DirectoryUsersGetSecurity = field()
    

@dataclass
class DirectoryUsersGetResponse:
    content_type: str = field()
    status_code: int = field()
    user: Optional[shared.User] = field(default=None)
    
