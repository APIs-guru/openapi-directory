from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateLaunchProfilePathParams:
    launch_profile_id: str = field(default=None, metadata={'path_param': { 'field_name': 'launchProfileId', 'style': 'simple', 'explode': False }})
    studio_id: str = field(default=None, metadata={'path_param': { 'field_name': 'studioId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLaunchProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_client_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Client-Token' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateLaunchProfileRequestBodyStreamConfiguration:
    clipboard_mode: Optional[shared.StreamingClipboardModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clipboardMode' }})
    ec2_instance_types: Optional[List[shared.StreamingInstanceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2InstanceTypes' }})
    max_session_length_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSessionLengthInMinutes' }})
    streaming_image_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingImageIds' }})
    

@dataclass_json
@dataclass
class UpdateLaunchProfileRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    launch_profile_protocol_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchProfileProtocolVersions' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    stream_configuration: Optional[UpdateLaunchProfileRequestBodyStreamConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamConfiguration' }})
    studio_component_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioComponentIds' }})
    

@dataclass
class UpdateLaunchProfileRequest:
    path_params: UpdateLaunchProfilePathParams = field(default=None)
    headers: UpdateLaunchProfileHeaders = field(default=None)
    request: UpdateLaunchProfileRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateLaunchProfileResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_launch_profile_response: Optional[shared.UpdateLaunchProfileResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
