from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateLaunchProfilePathParams:
    studio_id: str = field(default=None, metadata={'path_param': { 'field_name': 'studioId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateLaunchProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_client_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Client-Token', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateLaunchProfileRequestBodyStreamConfiguration:
    clipboard_mode: Optional[shared.StreamingClipboardModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clipboardMode' }})
    ec2_instance_types: Optional[List[shared.StreamingInstanceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2InstanceTypes' }})
    max_session_length_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSessionLengthInMinutes' }})
    streaming_image_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingImageIds' }})
    

@dataclass_json
@dataclass
class CreateLaunchProfileRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ec2_subnet_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2SubnetIds' }})
    launch_profile_protocol_versions: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchProfileProtocolVersions' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    stream_configuration: CreateLaunchProfileRequestBodyStreamConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamConfiguration' }})
    studio_component_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioComponentIds' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateLaunchProfileRequest:
    path_params: CreateLaunchProfilePathParams = field(default=None)
    headers: CreateLaunchProfileHeaders = field(default=None)
    request: CreateLaunchProfileRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateLaunchProfileResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_launch_profile_response: Optional[shared.CreateLaunchProfileResponse] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
