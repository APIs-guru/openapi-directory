from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class TwilioMessagePostTwilioPostHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class TwilioMessagePostTwilioPostRequest:
    headers: TwilioMessagePostTwilioPostHeaders = field()
    request: shared.TwilioMessageRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TwilioMessagePostTwilioPostResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    twilio_message_post_twilio_post_200_application_json_any: Optional[Any] = field(default=None)
    
