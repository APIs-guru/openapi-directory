from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateSignalingChannelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateSignalingChannelRequestBodySingleMasterConfiguration:
    message_ttl_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageTtlSeconds' }})
    

@dataclass_json
@dataclass
class UpdateSignalingChannelRequestBody:
    channel_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelARN' }})
    current_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentVersion' }})
    single_master_configuration: Optional[UpdateSignalingChannelRequestBodySingleMasterConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SingleMasterConfiguration' }})
    

@dataclass
class UpdateSignalingChannelRequest:
    headers: UpdateSignalingChannelHeaders = field(default=None)
    request: UpdateSignalingChannelRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSignalingChannelResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    client_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_signaling_channel_output: Optional[dict[str, Any]] = field(default=None)
    version_mismatch_exception: Optional[Any] = field(default=None)
    
