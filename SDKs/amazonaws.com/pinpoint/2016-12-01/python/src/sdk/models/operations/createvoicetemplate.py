from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateVoiceTemplatePathParams:
    template_name: str = field(metadata={'path_param': { 'field_name': 'template-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateVoiceTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateVoiceTemplateRequestBodyVoiceTemplateRequest:
    r"""CreateVoiceTemplateRequestBodyVoiceTemplateRequest
    Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    default_substitutions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultSubstitutions') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateDescription') }})
    voice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoiceId') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclass
class CreateVoiceTemplateRequestBody:
    voice_template_request: CreateVoiceTemplateRequestBodyVoiceTemplateRequest = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoiceTemplateRequest') }})
    

@dataclass
class CreateVoiceTemplateRequest:
    headers: CreateVoiceTemplateHeaders = field()
    path_params: CreateVoiceTemplatePathParams = field()
    request: CreateVoiceTemplateRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateVoiceTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    create_voice_template_response: Optional[shared.CreateVoiceTemplateResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
