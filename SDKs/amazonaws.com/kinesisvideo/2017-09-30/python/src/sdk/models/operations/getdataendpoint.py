from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDataEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class GetDataEndpointRequestBodyAPINameEnum(str, Enum):
    PUT_MEDIA = "PUT_MEDIA"
    GET_MEDIA = "GET_MEDIA"
    LIST_FRAGMENTS = "LIST_FRAGMENTS"
    GET_MEDIA_FOR_FRAGMENT_LIST = "GET_MEDIA_FOR_FRAGMENT_LIST"
    GET_HLS_STREAMING_SESSION_URL = "GET_HLS_STREAMING_SESSION_URL"
    GET_DASH_STREAMING_SESSION_URL = "GET_DASH_STREAMING_SESSION_URL"
    GET_CLIP = "GET_CLIP"


@dataclass_json
@dataclass
class GetDataEndpointRequestBody:
    api_name: GetDataEndpointRequestBodyAPINameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'APIName' }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamARN' }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    

@dataclass
class GetDataEndpointRequest:
    headers: GetDataEndpointHeaders = field(default=None)
    request: GetDataEndpointRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDataEndpointResponse:
    client_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_data_endpoint_output: Optional[shared.GetDataEndpointOutput] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
