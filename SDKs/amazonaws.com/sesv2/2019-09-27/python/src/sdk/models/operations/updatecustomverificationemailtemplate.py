from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateCustomVerificationEmailTemplatePathParams:
    template_name: str = field(metadata={'path_param': { 'field_name': 'TemplateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCustomVerificationEmailTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateCustomVerificationEmailTemplateRequestBody:
    failure_redirection_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureRedirectionURL') }})
    from_email_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromEmailAddress') }})
    success_redirection_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessRedirectionURL') }})
    template_content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateContent') }})
    template_subject: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateSubject') }})
    

@dataclass
class UpdateCustomVerificationEmailTemplateRequest:
    headers: UpdateCustomVerificationEmailTemplateHeaders = field()
    path_params: UpdateCustomVerificationEmailTemplatePathParams = field()
    request: UpdateCustomVerificationEmailTemplateRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCustomVerificationEmailTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_custom_verification_email_template_response: Optional[dict[str, Any]] = field(default=None)
    
