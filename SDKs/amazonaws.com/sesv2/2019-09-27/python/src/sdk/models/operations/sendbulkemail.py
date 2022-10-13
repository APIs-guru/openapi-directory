from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SendBulkEmailHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class SendBulkEmailRequestBodyDefaultContent:
    template: Optional[shared.Template] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Template' }})
    

@dataclass_json
@dataclass
class SendBulkEmailRequestBody:
    bulk_email_entries: List[shared.BulkEmailEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BulkEmailEntries' }})
    configuration_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationSetName' }})
    default_content: SendBulkEmailRequestBodyDefaultContent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultContent' }})
    default_email_tags: Optional[List[shared.MessageTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultEmailTags' }})
    feedback_forwarding_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeedbackForwardingEmailAddress' }})
    feedback_forwarding_email_address_identity_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeedbackForwardingEmailAddressIdentityArn' }})
    from_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromEmailAddress' }})
    from_email_address_identity_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromEmailAddressIdentityArn' }})
    reply_to_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplyToAddresses' }})
    

@dataclass
class SendBulkEmailRequest:
    headers: SendBulkEmailHeaders = field(default=None)
    request: SendBulkEmailRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendBulkEmailResponse:
    account_suspended_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    mail_from_domain_not_verified_exception: Optional[Any] = field(default=None)
    message_rejected: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    send_bulk_email_response: Optional[shared.SendBulkEmailResponse] = field(default=None)
    sending_paused_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
