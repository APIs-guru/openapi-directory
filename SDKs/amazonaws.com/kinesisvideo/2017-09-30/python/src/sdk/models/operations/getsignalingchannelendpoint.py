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
class GetSignalingChannelEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration:
    r"""GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration
    An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type. 
    """
    
    protocols: Optional[List[shared.ChannelProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocols') }})
    role: Optional[shared.ChannelRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    

@dataclass_json
@dataclass
class GetSignalingChannelEndpointRequestBody:
    channel_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelARN') }})
    single_master_channel_endpoint_configuration: Optional[GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SingleMasterChannelEndpointConfiguration') }})
    

@dataclass
class GetSignalingChannelEndpointRequest:
    headers: GetSignalingChannelEndpointHeaders = field()
    request: GetSignalingChannelEndpointRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetSignalingChannelEndpointResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    client_limit_exceeded_exception: Optional[Any] = field(default=None)
    get_signaling_channel_endpoint_output: Optional[shared.GetSignalingChannelEndpointOutput] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
