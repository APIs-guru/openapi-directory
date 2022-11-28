from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BigqueryTablesGetIamPolicyPathParams:
    resource: str = field(metadata={'path_param': { 'field_name': 'resource', 'style': 'simple', 'explode': False }})
    

@dataclass
class BigqueryTablesGetIamPolicyQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class BigqueryTablesGetIamPolicySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryTablesGetIamPolicySecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryTablesGetIamPolicySecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryTablesGetIamPolicySecurity:
    option1: Optional[BigqueryTablesGetIamPolicySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigqueryTablesGetIamPolicySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[BigqueryTablesGetIamPolicySecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigqueryTablesGetIamPolicyRequest:
    path_params: BigqueryTablesGetIamPolicyPathParams = field()
    query_params: BigqueryTablesGetIamPolicyQueryParams = field()
    security: BigqueryTablesGetIamPolicySecurity = field()
    request: Optional[shared.GetIamPolicyRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BigqueryTablesGetIamPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    policy: Optional[shared.Policy] = field(default=None)
    
