from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateCustomVerificationEmailTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateCustomVerificationEmailTemplateRequestBody:
    failure_redirection_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureRedirectionURL' }})
    from_email_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromEmailAddress' }})
    success_redirection_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuccessRedirectionURL' }})
    template_content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateContent' }})
    template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateName' }})
    template_subject: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateSubject' }})
    

@dataclass
class CreateCustomVerificationEmailTemplateRequest:
    headers: CreateCustomVerificationEmailTemplateHeaders = field(default=None)
    request: CreateCustomVerificationEmailTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCustomVerificationEmailTemplateResponse:
    already_exists_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_custom_verification_email_template_response: Optional[dict[str, Any]] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
