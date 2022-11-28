from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class Area120tablesTablesRowsPatchPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class Area120tablesTablesRowsPatchViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    COLUMN_ID_VIEW = "COLUMN_ID_VIEW"


@dataclass
class Area120tablesTablesRowsPatchQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    update_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updateMask', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view: Optional[Area120tablesTablesRowsPatchViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class Area120tablesTablesRowsPatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Area120tablesTablesRowsPatchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Area120tablesTablesRowsPatchSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Area120tablesTablesRowsPatchSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Area120tablesTablesRowsPatchSecurity:
    option1: Optional[Area120tablesTablesRowsPatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[Area120tablesTablesRowsPatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[Area120tablesTablesRowsPatchSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[Area120tablesTablesRowsPatchSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class Area120tablesTablesRowsPatchRequest:
    path_params: Area120tablesTablesRowsPatchPathParams = field()
    query_params: Area120tablesTablesRowsPatchQueryParams = field()
    security: Area120tablesTablesRowsPatchSecurity = field()
    request: Optional[shared.Row] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class Area120tablesTablesRowsPatchResponse:
    content_type: str = field()
    status_code: int = field()
    row: Optional[shared.Row] = field(default=None)
    
