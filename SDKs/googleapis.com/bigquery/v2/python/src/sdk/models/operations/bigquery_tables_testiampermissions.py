from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class BigqueryTablesTestIamPermissionsPathParams:
    resource: str = field(default=None, metadata={'path_param': { 'field_name': 'resource', 'style': 'simple', 'explode': False }})
    

@dataclass
class BigqueryTablesTestIamPermissionsQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class BigqueryTablesTestIamPermissionsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryTablesTestIamPermissionsSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryTablesTestIamPermissionsSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryTablesTestIamPermissionsSecurity:
    option1: Optional[BigqueryTablesTestIamPermissionsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigqueryTablesTestIamPermissionsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[BigqueryTablesTestIamPermissionsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigqueryTablesTestIamPermissionsRequest:
    path_params: BigqueryTablesTestIamPermissionsPathParams = field(default=None)
    query_params: BigqueryTablesTestIamPermissionsQueryParams = field(default=None)
    request: Optional[shared.TestIamPermissionsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BigqueryTablesTestIamPermissionsSecurity = field(default=None)
    

@dataclass
class BigqueryTablesTestIamPermissionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    test_iam_permissions_response: Optional[shared.TestIamPermissionsResponse] = field(default=None)
    
