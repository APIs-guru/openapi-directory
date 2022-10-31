from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateVoiceTemplatePathParams:
    template_name: str = field(default=None, metadata={'path_param': { 'field_name': 'template-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateVoiceTemplateQueryParams:
    create_new_version: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'create-new-version', 'style': 'form', 'explode': True }})
    version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateVoiceTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateVoiceTemplateRequestBodyVoiceTemplateRequest:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    default_substitutions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultSubstitutions' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateDescription' }})
    voice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoiceId' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class UpdateVoiceTemplateRequestBody:
    voice_template_request: UpdateVoiceTemplateRequestBodyVoiceTemplateRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoiceTemplateRequest' }})
    

@dataclass
class UpdateVoiceTemplateRequest:
    path_params: UpdateVoiceTemplatePathParams = field(default=None)
    query_params: UpdateVoiceTemplateQueryParams = field(default=None)
    headers: UpdateVoiceTemplateHeaders = field(default=None)
    request: UpdateVoiceTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateVoiceTemplateResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_voice_template_response: Optional[shared.UpdateVoiceTemplateResponse] = field(default=None)
    
