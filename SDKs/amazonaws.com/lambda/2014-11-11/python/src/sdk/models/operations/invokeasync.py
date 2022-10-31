from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class InvokeAsyncPathParams:
    function_name: str = field(default=None, metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    

@dataclass
class InvokeAsyncHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class InvokeAsyncRequestBody:
    invoke_args: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvokeArgs' }})
    

@dataclass
class InvokeAsyncRequest:
    path_params: InvokeAsyncPathParams = field(default=None)
    headers: InvokeAsyncHeaders = field(default=None)
    request: InvokeAsyncRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InvokeAsyncResponse:
    content_type: str = field(default=None)
    invalid_request_content_exception: Optional[shared.InvalidRequestContentException] = field(default=None)
    invoke_async_response: Optional[shared.InvokeAsyncResponse] = field(default=None)
    resource_not_found_exception: Optional[shared.ResourceNotFoundException] = field(default=None)
    service_exception: Optional[shared.ServiceException] = field(default=None)
    status_code: int = field(default=None)
    
