from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateEmailTemplatePathParams:
    template_name: str = field(default=None, metadata={'path_param': { 'field_name': 'template-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateEmailTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateEmailTemplateRequestBodyEmailTemplateRequest:
    default_substitutions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultSubstitutions' }})
    html_part: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HtmlPart' }})
    recommender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommenderId' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subject' }})
    template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateDescription' }})
    text_part: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextPart' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class CreateEmailTemplateRequestBody:
    email_template_request: CreateEmailTemplateRequestBodyEmailTemplateRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailTemplateRequest' }})
    

@dataclass
class CreateEmailTemplateRequest:
    path_params: CreateEmailTemplatePathParams = field(default=None)
    headers: CreateEmailTemplateHeaders = field(default=None)
    request: CreateEmailTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateEmailTemplateResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_email_template_response: Optional[shared.CreateEmailTemplateResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
