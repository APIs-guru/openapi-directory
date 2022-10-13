from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateCustomVerificationEmailTemplatePathParams:
    template_name: str = field(default=None, metadata={'path_param': { 'field_name': 'TemplateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCustomVerificationEmailTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateCustomVerificationEmailTemplateRequestBody:
    failure_redirection_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureRedirectionURL' }})
    from_email_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromEmailAddress' }})
    success_redirection_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuccessRedirectionURL' }})
    template_content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateContent' }})
    template_subject: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateSubject' }})
    

@dataclass
class UpdateCustomVerificationEmailTemplateRequest:
    path_params: UpdateCustomVerificationEmailTemplatePathParams = field(default=None)
    headers: UpdateCustomVerificationEmailTemplateHeaders = field(default=None)
    request: UpdateCustomVerificationEmailTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCustomVerificationEmailTemplateResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_custom_verification_email_template_response: Optional[dict[str, Any]] = field(default=None)
    
