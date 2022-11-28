from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DirectoryOrgunitsListPathParams:
    customer_id: str = field(metadata={'path_param': { 'field_name': 'customerId', 'style': 'simple', 'explode': False }})
    
class DirectoryOrgunitsListTypeEnum(str, Enum):
    ALL = "all"
    CHILDREN = "children"


@dataclass
class DirectoryOrgunitsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    org_unit_path: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orgUnitPath', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    type: Optional[DirectoryOrgunitsListTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DirectoryOrgunitsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryOrgunitsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryOrgunitsListSecurity:
    option1: Optional[DirectoryOrgunitsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DirectoryOrgunitsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DirectoryOrgunitsListRequest:
    path_params: DirectoryOrgunitsListPathParams = field()
    query_params: DirectoryOrgunitsListQueryParams = field()
    security: DirectoryOrgunitsListSecurity = field()
    

@dataclass
class DirectoryOrgunitsListResponse:
    content_type: str = field()
    status_code: int = field()
    org_units: Optional[shared.OrgUnits] = field(default=None)
    
