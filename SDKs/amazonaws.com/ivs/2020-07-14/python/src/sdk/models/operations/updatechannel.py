from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateChannelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateChannelRequestBodyLatencyModeEnum(str, Enum):
    NORMAL = "NORMAL"
    LOW = "LOW"

class UpdateChannelRequestBodyTypeEnum(str, Enum):
    BASIC = "BASIC"
    STANDARD = "STANDARD"


@dataclass_json
@dataclass
class UpdateChannelRequestBody:
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized') }})
    latency_mode: Optional[UpdateChannelRequestBodyLatencyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latencyMode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    recording_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordingConfigurationArn') }})
    type: Optional[UpdateChannelRequestBodyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class UpdateChannelRequest:
    headers: UpdateChannelHeaders = field()
    request: UpdateChannelRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateChannelResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    pending_verification: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    update_channel_response: Optional[shared.UpdateChannelResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
