from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class TwilioMessageGetTwilioGetQueryParams:
    to: str = field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    base64_message: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'base64_message', 'style': 'form', 'explode': True }})
    message: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'message', 'style': 'form', 'explode': True }})
    

@dataclass
class TwilioMessageGetTwilioGetHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class TwilioMessageGetTwilioGetRequest:
    headers: TwilioMessageGetTwilioGetHeaders = field()
    query_params: TwilioMessageGetTwilioGetQueryParams = field()
    

@dataclass
class TwilioMessageGetTwilioGetResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    twilio_message_get_twilio_get_200_application_json_any: Optional[Any] = field(default=None)
    
