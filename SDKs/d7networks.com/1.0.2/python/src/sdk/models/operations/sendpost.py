from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SendPostHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type' }})
    

@dataclass
class SendPostRequest:
    headers: SendPostHeaders = field(default=None)
    request: shared.SendSmsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendPostResponse:
    content_type: str = field(default=None)
    send_post_500_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
