from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class SendbatchPostHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type' }})
    

@dataclass
class SendbatchPostRequest:
    headers: SendbatchPostHeaders = field(default=None)
    request: shared.BulkSmsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendbatchPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
