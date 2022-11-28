from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateResponsePlanHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateResponsePlanRequestBodyChatChannel:
    r"""UpdateResponsePlanRequestBodyChatChannel
    The AWS Chatbot chat channel used for collaboration during an incident.
    """
    
    chatbot_sns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chatbotSns') }})
    empty: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('empty') }})
    

@dataclass_json
@dataclass
class UpdateResponsePlanRequestBody:
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    actions: Optional[List[shared.Action]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    chat_channel: Optional[UpdateResponsePlanRequestBodyChatChannel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chatChannel') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    engagements: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engagements') }})
    incident_template_dedupe_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentTemplateDedupeString') }})
    incident_template_impact: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentTemplateImpact') }})
    incident_template_notification_targets: Optional[List[shared.NotificationTargetItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentTemplateNotificationTargets') }})
    incident_template_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentTemplateSummary') }})
    incident_template_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentTemplateTitle') }})
    

@dataclass
class UpdateResponsePlanRequest:
    headers: UpdateResponsePlanHeaders = field()
    request: UpdateResponsePlanRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateResponsePlanResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_response_plan_output: Optional[dict[str, Any]] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
