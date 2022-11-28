from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BigqueryRowAccessPoliciesListPathParams:
    dataset_id: str = field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    table_id: str = field(metadata={'path_param': { 'field_name': 'tableId', 'style': 'simple', 'explode': False }})
    

@dataclass
class BigqueryRowAccessPoliciesListQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class BigqueryRowAccessPoliciesListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryRowAccessPoliciesListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryRowAccessPoliciesListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryRowAccessPoliciesListSecurity:
    option1: Optional[BigqueryRowAccessPoliciesListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigqueryRowAccessPoliciesListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[BigqueryRowAccessPoliciesListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigqueryRowAccessPoliciesListRequest:
    path_params: BigqueryRowAccessPoliciesListPathParams = field()
    query_params: BigqueryRowAccessPoliciesListQueryParams = field()
    security: BigqueryRowAccessPoliciesListSecurity = field()
    

@dataclass
class BigqueryRowAccessPoliciesListResponse:
    content_type: str = field()
    status_code: int = field()
    list_row_access_policies_response: Optional[shared.ListRowAccessPoliciesResponse] = field(default=None)
    
