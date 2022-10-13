from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateResponsePlanHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateResponsePlanRequestBodyChatChannel:
    chatbot_sns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chatbotSns' }})
    empty: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'empty' }})
    

@dataclass_json
@dataclass
class CreateResponsePlanRequestBodyIncidentTemplate:
    dedupe_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dedupeString' }})
    impact: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impact' }})
    notification_targets: Optional[List[shared.NotificationTargetItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationTargets' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class CreateResponsePlanRequestBody:
    actions: Optional[List[shared.Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    chat_channel: Optional[CreateResponsePlanRequestBodyChatChannel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chatChannel' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    engagements: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engagements' }})
    incident_template: CreateResponsePlanRequestBodyIncidentTemplate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incidentTemplate' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateResponsePlanRequest:
    headers: CreateResponsePlanHeaders = field(default=None)
    request: CreateResponsePlanRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateResponsePlanResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_response_plan_output: Optional[shared.CreateResponsePlanOutput] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
