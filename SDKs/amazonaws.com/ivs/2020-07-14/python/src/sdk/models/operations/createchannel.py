from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateChannelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class CreateChannelRequestBodyLatencyModeEnum(str, Enum):
    NORMAL = "NORMAL"
    LOW = "LOW"

class CreateChannelRequestBodyTypeEnum(str, Enum):
    BASIC = "BASIC"
    STANDARD = "STANDARD"


@dataclass_json
@dataclass
class CreateChannelRequestBody:
    authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorized' }})
    latency_mode: Optional[CreateChannelRequestBodyLatencyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latencyMode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    recording_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordingConfigurationArn' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[CreateChannelRequestBodyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateChannelRequest:
    headers: CreateChannelHeaders = field(default=None)
    request: CreateChannelRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateChannelResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_channel_response: Optional[shared.CreateChannelResponse] = field(default=None)
    pending_verification: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
