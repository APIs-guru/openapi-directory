from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateEmailTemplatePathParams:
    template_name: str = field(metadata={'path_param': { 'field_name': 'TemplateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEmailTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateEmailTemplateRequestBodyTemplateContent:
    r"""UpdateEmailTemplateRequestBodyTemplateContent
    The content of the email, composed of a subject line, an HTML part, and a text-only part.
    """
    
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Html') }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    

@dataclass_json
@dataclass
class UpdateEmailTemplateRequestBody:
    template_content: UpdateEmailTemplateRequestBodyTemplateContent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateContent') }})
    

@dataclass
class UpdateEmailTemplateRequest:
    headers: UpdateEmailTemplateHeaders = field()
    path_params: UpdateEmailTemplatePathParams = field()
    request: UpdateEmailTemplateRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateEmailTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_email_template_response: Optional[dict[str, Any]] = field(default=None)
    
