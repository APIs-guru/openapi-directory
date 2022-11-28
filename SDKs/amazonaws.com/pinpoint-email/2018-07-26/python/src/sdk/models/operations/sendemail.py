from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SendEmailHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SendEmailRequestBodyContent:
    r"""SendEmailRequestBodyContent
    An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
    """
    
    raw: Optional[shared.RawMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Raw') }})
    simple: Optional[shared.Message] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Simple') }})
    template: Optional[shared.Template] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Template') }})
    

@dataclass_json
@dataclass
class SendEmailRequestBodyDestination:
    r"""SendEmailRequestBodyDestination
    An object that describes the recipients for an email.
    """
    
    bcc_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BccAddresses') }})
    cc_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CcAddresses') }})
    to_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ToAddresses') }})
    

@dataclass_json
@dataclass
class SendEmailRequestBody:
    content: SendEmailRequestBodyContent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    destination: SendEmailRequestBodyDestination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    configuration_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSetName') }})
    email_tags: Optional[List[shared.MessageTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailTags') }})
    feedback_forwarding_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackForwardingEmailAddress') }})
    from_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromEmailAddress') }})
    reply_to_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplyToAddresses') }})
    

@dataclass
class SendEmailRequest:
    headers: SendEmailHeaders = field()
    request: SendEmailRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendEmailResponse:
    content_type: str = field()
    status_code: int = field()
    account_suspended_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    mail_from_domain_not_verified_exception: Optional[Any] = field(default=None)
    message_rejected: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    send_email_response: Optional[shared.SendEmailResponse] = field(default=None)
    sending_paused_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
