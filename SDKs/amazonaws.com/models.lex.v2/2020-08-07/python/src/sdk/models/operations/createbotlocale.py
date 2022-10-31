from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateBotLocalePathParams:
    bot_id: str = field(default=None, metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    bot_version: str = field(default=None, metadata={'path_param': { 'field_name': 'botVersion', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBotLocaleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateBotLocaleRequestBodyVoiceSettings:
    voice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceId' }})
    

@dataclass_json
@dataclass
class CreateBotLocaleRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    locale_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeId' }})
    nlu_intent_confidence_threshold: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nluIntentConfidenceThreshold' }})
    voice_settings: Optional[CreateBotLocaleRequestBodyVoiceSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceSettings' }})
    

@dataclass
class CreateBotLocaleRequest:
    path_params: CreateBotLocalePathParams = field(default=None)
    headers: CreateBotLocaleHeaders = field(default=None)
    request: CreateBotLocaleRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateBotLocaleResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_bot_locale_response: Optional[shared.CreateBotLocaleResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
