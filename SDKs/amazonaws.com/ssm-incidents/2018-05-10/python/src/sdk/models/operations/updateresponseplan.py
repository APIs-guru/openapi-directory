from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateResponsePlanHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateResponsePlanRequestBodyChatChannel:
    chatbot_sns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chatbotSns' }})
    empty: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'empty' }})
    

@dataclass_json
@dataclass
class UpdateResponsePlanRequestBody:
    actions: Optional[List[shared.Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    chat_channel: Optional[UpdateResponsePlanRequestBodyChatChannel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chatChannel' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    engagements: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engagements' }})
    incident_template_dedupe_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incidentTemplateDedupeString' }})
    incident_template_impact: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incidentTemplateImpact' }})
    incident_template_notification_targets: Optional[List[shared.NotificationTargetItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incidentTemplateNotificationTargets' }})
    incident_template_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incidentTemplateSummary' }})
    incident_template_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incidentTemplateTitle' }})
    

@dataclass
class UpdateResponsePlanRequest:
    headers: UpdateResponsePlanHeaders = field(default=None)
    request: UpdateResponsePlanRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateResponsePlanResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_response_plan_output: Optional[dict[str, Any]] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
