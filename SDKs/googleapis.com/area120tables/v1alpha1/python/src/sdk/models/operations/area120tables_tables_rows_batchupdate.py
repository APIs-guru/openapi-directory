from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class Area120tablesTablesRowsBatchUpdatePathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class Area120tablesTablesRowsBatchUpdateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class Area120tablesTablesRowsBatchUpdateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Area120tablesTablesRowsBatchUpdateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Area120tablesTablesRowsBatchUpdateSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Area120tablesTablesRowsBatchUpdateSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Area120tablesTablesRowsBatchUpdateSecurity:
    option1: Optional[Area120tablesTablesRowsBatchUpdateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[Area120tablesTablesRowsBatchUpdateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[Area120tablesTablesRowsBatchUpdateSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[Area120tablesTablesRowsBatchUpdateSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class Area120tablesTablesRowsBatchUpdateRequest:
    path_params: Area120tablesTablesRowsBatchUpdatePathParams = field(default=None)
    query_params: Area120tablesTablesRowsBatchUpdateQueryParams = field(default=None)
    request: Optional[shared.BatchUpdateRowsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: Area120tablesTablesRowsBatchUpdateSecurity = field(default=None)
    

@dataclass
class Area120tablesTablesRowsBatchUpdateResponse:
    batch_update_rows_response: Optional[shared.BatchUpdateRowsResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
