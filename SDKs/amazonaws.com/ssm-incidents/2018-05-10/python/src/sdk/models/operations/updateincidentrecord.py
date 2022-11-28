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
class UpdateIncidentRecordHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateIncidentRecordRequestBodyChatChannel:
    r"""UpdateIncidentRecordRequestBodyChatChannel
    The AWS Chatbot chat channel used for collaboration during an incident.
    """
    
    chatbot_sns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chatbotSns') }})
    empty: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('empty') }})
    
class UpdateIncidentRecordRequestBodyStatusEnum(str, Enum):
    OPEN = "OPEN"
    RESOLVED = "RESOLVED"


@dataclass_json
@dataclass
class UpdateIncidentRecordRequestBody:
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    chat_channel: Optional[UpdateIncidentRecordRequestBodyChatChannel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chatChannel') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    impact: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impact') }})
    notification_targets: Optional[List[shared.NotificationTargetItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationTargets') }})
    status: Optional[UpdateIncidentRecordRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass
class UpdateIncidentRecordRequest:
    headers: UpdateIncidentRecordHeaders = field()
    request: UpdateIncidentRecordRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateIncidentRecordResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_incident_record_output: Optional[dict[str, Any]] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
