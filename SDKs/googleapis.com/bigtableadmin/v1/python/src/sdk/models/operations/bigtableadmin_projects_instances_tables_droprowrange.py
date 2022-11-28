from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BigtableadminProjectsInstancesTablesDropRowRangePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class BigtableadminProjectsInstancesTablesDropRowRangeQueryParams:
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
class BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsInstancesTablesDropRowRangeSecurity:
    option1: Optional[BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigtableadminProjectsInstancesTablesDropRowRangeRequest:
    path_params: BigtableadminProjectsInstancesTablesDropRowRangePathParams = field()
    query_params: BigtableadminProjectsInstancesTablesDropRowRangeQueryParams = field()
    security: BigtableadminProjectsInstancesTablesDropRowRangeSecurity = field()
    request: Optional[shared.DropRowRangeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BigtableadminProjectsInstancesTablesDropRowRangeResponse:
    content_type: str = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
