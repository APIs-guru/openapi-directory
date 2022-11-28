from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class InvokeEndpointAsyncPathParams:
    endpoint_name: str = field(metadata={'path_param': { 'field_name': 'EndpointName', 'style': 'simple', 'explode': False }})
    

@dataclass
class InvokeEndpointAsyncHeaders:
    x_amzn_sage_maker_input_location: str = field(metadata={'header': { 'field_name': 'X-Amzn-SageMaker-InputLocation', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amzn_sage_maker_accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Accept', 'style': 'simple', 'explode': False }})
    x_amzn_sage_maker_content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Content-Type', 'style': 'simple', 'explode': False }})
    x_amzn_sage_maker_custom_attributes: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Custom-Attributes', 'style': 'simple', 'explode': False }})
    x_amzn_sage_maker_inference_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Inference-Id', 'style': 'simple', 'explode': False }})
    x_amzn_sage_maker_request_ttl_seconds: Optional[int] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-RequestTTLSeconds', 'style': 'simple', 'explode': False }})
    

@dataclass
class InvokeEndpointAsyncRequest:
    headers: InvokeEndpointAsyncHeaders = field()
    path_params: InvokeEndpointAsyncPathParams = field()
    

@dataclass
class InvokeEndpointAsyncResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure: Optional[Any] = field(default=None)
    invoke_endpoint_async_output: Optional[shared.InvokeEndpointAsyncOutput] = field(default=None)
    service_unavailable: Optional[Any] = field(default=None)
    validation_error: Optional[Any] = field(default=None)
    
