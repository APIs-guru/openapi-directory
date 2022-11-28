from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum(str, Enum):
    LEVEL_FORMAT_UNSPECIFIED = "LEVEL_FORMAT_UNSPECIFIED"
    AS_DEFINED = "AS_DEFINED"
    CEL = "CEL"


@dataclass
class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest:
    path_params: AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams = field()
    query_params: AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams = field()
    security: AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity = field()
    

@dataclass
class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse:
    content_type: str = field()
    status_code: int = field()
    gcp_user_access_binding: Optional[shared.GcpUserAccessBinding] = field(default=None)
    
