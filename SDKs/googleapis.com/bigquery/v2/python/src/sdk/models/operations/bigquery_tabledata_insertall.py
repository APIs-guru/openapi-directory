from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BigqueryTabledataInsertAllPathParams:
    dataset_id: str = field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    table_id: str = field(metadata={'path_param': { 'field_name': 'tableId', 'style': 'simple', 'explode': False }})
    

@dataclass
class BigqueryTabledataInsertAllQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class BigqueryTabledataInsertAllSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryTabledataInsertAllSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryTabledataInsertAllSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryTabledataInsertAllSecurity:
    option1: Optional[BigqueryTabledataInsertAllSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigqueryTabledataInsertAllSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[BigqueryTabledataInsertAllSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigqueryTabledataInsertAllRequest:
    path_params: BigqueryTabledataInsertAllPathParams = field()
    query_params: BigqueryTabledataInsertAllQueryParams = field()
    security: BigqueryTabledataInsertAllSecurity = field()
    request: Optional[shared.TableDataInsertAllRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BigqueryTabledataInsertAllResponse:
    content_type: str = field()
    status_code: int = field()
    table_data_insert_all_response: Optional[shared.TableDataInsertAllResponse] = field(default=None)
    
