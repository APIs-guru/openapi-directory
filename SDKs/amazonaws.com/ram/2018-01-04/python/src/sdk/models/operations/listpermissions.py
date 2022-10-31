from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListPermissionsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPermissionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ListPermissionsRequestBody:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    

@dataclass
class ListPermissionsRequest:
    query_params: ListPermissionsQueryParams = field(default=None)
    headers: ListPermissionsHeaders = field(default=None)
    request: ListPermissionsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListPermissionsResponse:
    content_type: str = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    list_permissions_response: Optional[shared.ListPermissionsResponse] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    server_internal_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
