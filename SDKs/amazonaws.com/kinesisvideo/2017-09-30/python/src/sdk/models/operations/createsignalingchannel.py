from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateSignalingChannelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class CreateSignalingChannelRequestBodyChannelTypeEnum(str, Enum):
    SINGLE_MASTER = "SINGLE_MASTER"


@dataclass_json
@dataclass
class CreateSignalingChannelRequestBodySingleMasterConfiguration:
    message_ttl_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageTtlSeconds' }})
    

@dataclass_json
@dataclass
class CreateSignalingChannelRequestBody:
    channel_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelName' }})
    channel_type: Optional[CreateSignalingChannelRequestBodyChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelType' }})
    single_master_configuration: Optional[CreateSignalingChannelRequestBodySingleMasterConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SingleMasterConfiguration' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    

@dataclass
class CreateSignalingChannelRequest:
    headers: CreateSignalingChannelHeaders = field(default=None)
    request: CreateSignalingChannelRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSignalingChannelResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    account_channel_limit_exceeded_exception: Optional[Any] = field(default=None)
    client_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_signaling_channel_output: Optional[shared.CreateSignalingChannelOutput] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tags_per_resource_exceeded_limit_exception: Optional[Any] = field(default=None)
    
