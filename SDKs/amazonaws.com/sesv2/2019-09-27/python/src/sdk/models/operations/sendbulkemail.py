from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SendBulkEmailHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SendBulkEmailRequestBodyDefaultContent:
    r"""SendBulkEmailRequestBodyDefaultContent
    An object that contains the body of the message. You can specify a template message.
    """
    
    template: Optional[shared.Template] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Template') }})
    

@dataclass_json
@dataclass
class SendBulkEmailRequestBody:
    bulk_email_entries: List[shared.BulkEmailEntry] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BulkEmailEntries') }})
    default_content: SendBulkEmailRequestBodyDefaultContent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultContent') }})
    configuration_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSetName') }})
    default_email_tags: Optional[List[shared.MessageTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultEmailTags') }})
    feedback_forwarding_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackForwardingEmailAddress') }})
    feedback_forwarding_email_address_identity_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackForwardingEmailAddressIdentityArn') }})
    from_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromEmailAddress') }})
    from_email_address_identity_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromEmailAddressIdentityArn') }})
    reply_to_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplyToAddresses') }})
    

@dataclass
class SendBulkEmailRequest:
    headers: SendBulkEmailHeaders = field()
    request: SendBulkEmailRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendBulkEmailResponse:
    content_type: str = field()
    status_code: int = field()
    account_suspended_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    mail_from_domain_not_verified_exception: Optional[Any] = field(default=None)
    message_rejected: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    send_bulk_email_response: Optional[shared.SendBulkEmailResponse] = field(default=None)
    sending_paused_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
