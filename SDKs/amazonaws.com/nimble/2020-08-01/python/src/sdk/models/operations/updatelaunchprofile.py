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
class UpdateLaunchProfilePathParams:
    launch_profile_id: str = field(metadata={'path_param': { 'field_name': 'launchProfileId', 'style': 'simple', 'explode': False }})
    studio_id: str = field(metadata={'path_param': { 'field_name': 'studioId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLaunchProfileHeaders:
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
class UpdateLaunchProfileRequestBodyStreamConfiguration:
    clipboard_mode: Optional[shared.StreamingClipboardModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clipboardMode') }})
    ec2_instance_types: Optional[List[shared.StreamingInstanceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2InstanceTypes') }})
    max_session_length_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSessionLengthInMinutes') }})
    streaming_image_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingImageIds') }})
    

@dataclass_json
@dataclass
class UpdateLaunchProfileRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    launch_profile_protocol_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchProfileProtocolVersions') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    stream_configuration: Optional[UpdateLaunchProfileRequestBodyStreamConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamConfiguration') }})
    studio_component_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioComponentIds') }})
    

@dataclass
class UpdateLaunchProfileRequest:
    headers: UpdateLaunchProfileHeaders = field()
    path_params: UpdateLaunchProfilePathParams = field()
    request: UpdateLaunchProfileRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateLaunchProfileResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_launch_profile_response: Optional[shared.UpdateLaunchProfileResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
