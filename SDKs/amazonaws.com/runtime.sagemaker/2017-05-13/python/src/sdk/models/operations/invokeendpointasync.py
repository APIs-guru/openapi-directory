from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class InvokeEndpointAsyncPathParams:
    endpoint_name: str = field(default=None, metadata={'path_param': { 'field_name': 'EndpointName', 'style': 'simple', 'explode': False }})
    

@dataclass
class InvokeEndpointAsyncHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amzn_sage_maker_accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Accept' }})
    x_amzn_sage_maker_content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Content-Type' }})
    x_amzn_sage_maker_custom_attributes: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Custom-Attributes' }})
    x_amzn_sage_maker_inference_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Inference-Id' }})
    x_amzn_sage_maker_input_location: str = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-InputLocation' }})
    x_amzn_sage_maker_request_ttl_seconds: Optional[int] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-RequestTTLSeconds' }})
    

@dataclass
class InvokeEndpointAsyncRequest:
    path_params: InvokeEndpointAsyncPathParams = field(default=None)
    headers: InvokeEndpointAsyncHeaders = field(default=None)
    

@dataclass
class InvokeEndpointAsyncResponse:
    content_type: str = field(default=None)
    internal_failure: Optional[Any] = field(default=None)
    invoke_endpoint_async_output: Optional[shared.InvokeEndpointAsyncOutput] = field(default=None)
    service_unavailable: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_error: Optional[Any] = field(default=None)
    
