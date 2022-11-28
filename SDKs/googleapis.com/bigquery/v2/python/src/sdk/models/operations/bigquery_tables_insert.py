from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BigqueryTablesInsertPathParams:
    dataset_id: str = field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class BigqueryTablesInsertQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class BigqueryTablesInsertSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryTablesInsertSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryTablesInsertSecurity:
    option1: Optional[BigqueryTablesInsertSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigqueryTablesInsertSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigqueryTablesInsertRequest:
    path_params: BigqueryTablesInsertPathParams = field()
    query_params: BigqueryTablesInsertQueryParams = field()
    security: BigqueryTablesInsertSecurity = field()
    request: Optional[shared.Table] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BigqueryTablesInsertResponse:
    content_type: str = field()
    status_code: int = field()
    table: Optional[shared.Table] = field(default=None)
    
