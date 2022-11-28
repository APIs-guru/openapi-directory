from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateDeliverabilityTestReportHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateDeliverabilityTestReportRequestBodyContent:
    r"""CreateDeliverabilityTestReportRequestBodyContent
    An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
    """
    
    raw: Optional[shared.RawMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Raw') }})
    simple: Optional[shared.Message] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Simple') }})
    template: Optional[shared.Template] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Template') }})
    

@dataclass_json
@dataclass
class CreateDeliverabilityTestReportRequestBody:
    content: CreateDeliverabilityTestReportRequestBodyContent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    from_email_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromEmailAddress') }})
    report_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportName') }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

@dataclass
class CreateDeliverabilityTestReportRequest:
    headers: CreateDeliverabilityTestReportHeaders = field()
    request: CreateDeliverabilityTestReportRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeliverabilityTestReportResponse:
    content_type: str = field()
    status_code: int = field()
    account_suspended_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    create_deliverability_test_report_response: Optional[shared.CreateDeliverabilityTestReportResponse] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    mail_from_domain_not_verified_exception: Optional[Any] = field(default=None)
    message_rejected: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    sending_paused_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
