from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateEndpointPathParams:
    application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    endpoint_id: str = field(default=None, metadata={'path_param': { 'field_name': 'endpoint-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateEndpointRequestBodyEndpointRequest:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    attributes: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    channel_type: Optional[shared.ChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelType' }})
    demographic: Optional[shared.EndpointDemographic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Demographic' }})
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EffectiveDate' }})
    endpoint_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointStatus' }})
    location: Optional[shared.EndpointLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    metrics: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metrics' }})
    opt_out: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptOut' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestId' }})
    user: Optional[shared.EndpointUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'User' }})
    

@dataclass_json
@dataclass
class UpdateEndpointRequestBody:
    endpoint_request: UpdateEndpointRequestBodyEndpointRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointRequest' }})
    

@dataclass
class UpdateEndpointRequest:
    path_params: UpdateEndpointPathParams = field(default=None)
    headers: UpdateEndpointHeaders = field(default=None)
    request: UpdateEndpointRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateEndpointResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_endpoint_response: Optional[shared.UpdateEndpointResponse] = field(default=None)
    
