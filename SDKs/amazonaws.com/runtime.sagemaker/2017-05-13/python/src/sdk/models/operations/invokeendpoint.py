from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class InvokeEndpointPathParams:
    endpoint_name: str = field(default=None, metadata={'path_param': { 'field_name': 'EndpointName', 'style': 'simple', 'explode': False }})
    

@dataclass
class InvokeEndpointHeaders:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type' }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amzn_sage_maker_custom_attributes: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Custom-Attributes' }})
    x_amzn_sage_maker_inference_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Inference-Id' }})
    x_amzn_sage_maker_target_container_hostname: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Target-Container-Hostname' }})
    x_amzn_sage_maker_target_model: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Target-Model' }})
    x_amzn_sage_maker_target_variant: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Target-Variant' }})
    

@dataclass_json
@dataclass
class InvokeEndpointRequestBody:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    

@dataclass
class InvokeEndpointRequest:
    path_params: InvokeEndpointPathParams = field(default=None)
    headers: InvokeEndpointHeaders = field(default=None)
    request: InvokeEndpointRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InvokeEndpointResponse:
    content_type: str = field(default=None)
    internal_failure: Optional[Any] = field(default=None)
    invoke_endpoint_output: Optional[shared.InvokeEndpointOutput] = field(default=None)
    model_error: Optional[Any] = field(default=None)
    service_unavailable: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_error: Optional[Any] = field(default=None)
    
