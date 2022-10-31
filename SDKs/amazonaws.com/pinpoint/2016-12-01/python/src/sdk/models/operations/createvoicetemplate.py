from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateVoiceTemplatePathParams:
    template_name: str = field(default=None, metadata={'path_param': { 'field_name': 'template-name', 'style': 'simple', 'explode': False }})
    

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
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    default_substitutions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultSubstitutions' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateDescription' }})
    voice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoiceId' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class CreateVoiceTemplateRequestBody:
    voice_template_request: CreateVoiceTemplateRequestBodyVoiceTemplateRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoiceTemplateRequest' }})
    

@dataclass
class CreateVoiceTemplateRequest:
    path_params: CreateVoiceTemplatePathParams = field(default=None)
    headers: CreateVoiceTemplateHeaders = field(default=None)
    request: CreateVoiceTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateVoiceTemplateResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_voice_template_response: Optional[shared.CreateVoiceTemplateResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
