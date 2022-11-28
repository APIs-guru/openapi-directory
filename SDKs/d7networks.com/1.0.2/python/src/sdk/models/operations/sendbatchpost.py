from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class SendbatchPostHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendbatchPostRequest:
    headers: SendbatchPostHeaders = field()
    request: shared.BulkSmsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendbatchPostResponse:
    content_type: str = field()
    status_code: int = field()
    
