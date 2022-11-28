from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SendPostHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendPostRequest:
    headers: SendPostHeaders = field()
    request: shared.SendSmsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendPostResponse:
    content_type: str = field()
    status_code: int = field()
    send_post_500_application_json_any: Optional[Any] = field(default=None)
    
