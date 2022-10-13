from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetSignalingChannelEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration:
    protocols: Optional[List[shared.ChannelProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocols' }})
    role: Optional[shared.ChannelRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    

@dataclass_json
@dataclass
class GetSignalingChannelEndpointRequestBody:
    channel_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelARN' }})
    single_master_channel_endpoint_configuration: Optional[GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SingleMasterChannelEndpointConfiguration' }})
    

@dataclass
class GetSignalingChannelEndpointRequest:
    headers: GetSignalingChannelEndpointHeaders = field(default=None)
    request: GetSignalingChannelEndpointRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetSignalingChannelEndpointResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    client_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_signaling_channel_endpoint_output: Optional[shared.GetSignalingChannelEndpointOutput] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
