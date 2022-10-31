from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
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
    raw: Optional[shared.RawMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Raw' }})
    simple: Optional[shared.Message] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Simple' }})
    template: Optional[shared.Template] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Template' }})
    

@dataclass_json
@dataclass
class SendEmailRequestBodyDestination:
    bcc_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BccAddresses' }})
    cc_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CcAddresses' }})
    to_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ToAddresses' }})
    

@dataclass_json
@dataclass
class SendEmailRequestBody:
    configuration_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationSetName' }})
    content: SendEmailRequestBodyContent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    destination: SendEmailRequestBodyDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    email_tags: Optional[List[shared.MessageTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailTags' }})
    feedback_forwarding_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeedbackForwardingEmailAddress' }})
    from_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromEmailAddress' }})
    reply_to_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplyToAddresses' }})
    

@dataclass
class SendEmailRequest:
    headers: SendEmailHeaders = field(default=None)
    request: SendEmailRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendEmailResponse:
    account_suspended_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    mail_from_domain_not_verified_exception: Optional[Any] = field(default=None)
    message_rejected: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    send_email_response: Optional[shared.SendEmailResponse] = field(default=None)
    sending_paused_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
