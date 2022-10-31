from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreatePushTemplatePathParams:
    template_name: str = field(default=None, metadata={'path_param': { 'field_name': 'template-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePushTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreatePushTemplateRequestBodyPushNotificationTemplateRequest:
    adm: Optional[shared.AndroidPushNotificationTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ADM' }})
    apns: Optional[shared.ApnsPushNotificationTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'APNS' }})
    baidu: Optional[shared.AndroidPushNotificationTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Baidu' }})
    default: Optional[shared.DefaultPushNotificationTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Default' }})
    default_substitutions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultSubstitutions' }})
    gcm: Optional[shared.AndroidPushNotificationTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GCM' }})
    recommender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommenderId' }})
    template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateDescription' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class CreatePushTemplateRequestBody:
    push_notification_template_request: CreatePushTemplateRequestBodyPushNotificationTemplateRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PushNotificationTemplateRequest' }})
    

@dataclass
class CreatePushTemplateRequest:
    path_params: CreatePushTemplatePathParams = field(default=None)
    headers: CreatePushTemplateHeaders = field(default=None)
    request: CreatePushTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePushTemplateResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_push_template_response: Optional[shared.CreatePushTemplateResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
