from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateStreamingSessionPathParams:
    studio_id: str = field(default=None, metadata={'path_param': { 'field_name': 'studioId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateStreamingSessionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_client_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Client-Token', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateStreamingSessionRequestBodyEc2InstanceTypeEnum(str, Enum):
    G4DN_XLARGE = "g4dn.xlarge"
    G4DN_2XLARGE = "g4dn.2xlarge"
    G4DN_4XLARGE = "g4dn.4xlarge"
    G4DN_8XLARGE = "g4dn.8xlarge"
    G4DN_12XLARGE = "g4dn.12xlarge"
    G4DN_16XLARGE = "g4dn.16xlarge"


@dataclass_json
@dataclass
class CreateStreamingSessionRequestBody:
    ec2_instance_type: Optional[CreateStreamingSessionRequestBodyEc2InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2InstanceType' }})
    launch_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchProfileId' }})
    owned_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownedBy' }})
    streaming_image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingImageId' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateStreamingSessionRequest:
    path_params: CreateStreamingSessionPathParams = field(default=None)
    headers: CreateStreamingSessionHeaders = field(default=None)
    request: CreateStreamingSessionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateStreamingSessionResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_streaming_session_response: Optional[shared.CreateStreamingSessionResponse] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
