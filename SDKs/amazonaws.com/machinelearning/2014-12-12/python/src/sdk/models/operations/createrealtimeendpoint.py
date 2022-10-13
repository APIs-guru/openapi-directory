from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateRealtimeEndpointXAmzTargetEnum(str, Enum):
    AMAZON_ML_20141212_CREATE_REALTIME_ENDPOINT = "AmazonML_20141212.CreateRealtimeEndpoint"


@dataclass
class CreateRealtimeEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateRealtimeEndpointXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateRealtimeEndpointRequest:
    headers: CreateRealtimeEndpointHeaders = field(default=None)
    request: shared.CreateRealtimeEndpointInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateRealtimeEndpointResponse:
    content_type: str = field(default=None)
    create_realtime_endpoint_output: Optional[shared.CreateRealtimeEndpointOutput] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
