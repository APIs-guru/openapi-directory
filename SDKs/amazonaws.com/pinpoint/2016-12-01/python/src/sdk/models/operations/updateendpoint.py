from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateEndpointPathParams:
    application_id: str = field(metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    endpoint_id: str = field(metadata={'path_param': { 'field_name': 'endpoint-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateEndpointRequestBodyEndpointRequest:
    r"""UpdateEndpointRequestBodyEndpointRequest
    Specifies the channel type and other settings for an endpoint.
    """
    
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    attributes: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    channel_type: Optional[shared.ChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelType') }})
    demographic: Optional[shared.EndpointDemographic] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Demographic') }})
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EffectiveDate') }})
    endpoint_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointStatus') }})
    location: Optional[shared.EndpointLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    metrics: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metrics') }})
    opt_out: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptOut') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestId') }})
    user: Optional[shared.EndpointUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    

@dataclass_json
@dataclass
class UpdateEndpointRequestBody:
    endpoint_request: UpdateEndpointRequestBodyEndpointRequest = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointRequest') }})
    

@dataclass
class UpdateEndpointRequest:
    headers: UpdateEndpointHeaders = field()
    path_params: UpdateEndpointPathParams = field()
    request: UpdateEndpointRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateEndpointResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_endpoint_response: Optional[shared.UpdateEndpointResponse] = field(default=None)
    
