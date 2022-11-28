from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateBotLocalePathParams:
    bot_id: str = field(metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    bot_version: str = field(metadata={'path_param': { 'field_name': 'botVersion', 'style': 'simple', 'explode': False }})
    locale_id: str = field(metadata={'path_param': { 'field_name': 'localeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBotLocaleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateBotLocaleRequestBodyVoiceSettings:
    r"""UpdateBotLocaleRequestBodyVoiceSettings
    Defines settings for using an Amazon Polly voice to communicate with a user.
    """
    
    voice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceId') }})
    

@dataclass_json
@dataclass
class UpdateBotLocaleRequestBody:
    nlu_intent_confidence_threshold: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nluIntentConfidenceThreshold') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    voice_settings: Optional[UpdateBotLocaleRequestBodyVoiceSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceSettings') }})
    

@dataclass
class UpdateBotLocaleRequest:
    headers: UpdateBotLocaleHeaders = field()
    path_params: UpdateBotLocalePathParams = field()
    request: UpdateBotLocaleRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateBotLocaleResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_bot_locale_response: Optional[shared.UpdateBotLocaleResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
