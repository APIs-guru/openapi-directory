from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SendVoiceMessageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SendVoiceMessageRequestBodyContent:
    r"""SendVoiceMessageRequestBodyContent
    An object that contains a voice message and information about the recipient that you want to send it to.
    """
    
    call_instructions_message: Optional[shared.CallInstructionsMessageType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallInstructionsMessage') }})
    plain_text_message: Optional[shared.PlainTextMessageType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlainTextMessage') }})
    ssml_message: Optional[shared.SsmlMessageType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SSMLMessage') }})
    

@dataclass_json
@dataclass
class SendVoiceMessageRequestBody:
    caller_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallerId') }})
    configuration_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSetName') }})
    content: Optional[SendVoiceMessageRequestBodyContent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    destination_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPhoneNumber') }})
    origination_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OriginationPhoneNumber') }})
    

@dataclass
class SendVoiceMessageRequest:
    headers: SendVoiceMessageHeaders = field()
    request: SendVoiceMessageRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendVoiceMessageResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    send_voice_message_response: Optional[shared.SendVoiceMessageResponse] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
