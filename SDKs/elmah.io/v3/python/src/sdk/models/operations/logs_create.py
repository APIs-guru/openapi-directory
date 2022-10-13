from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LogsCreateRequests:
    create_log: Optional[shared.CreateLog] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_log1: Optional[shared.CreateLog] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_log2: Optional[shared.CreateLog] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    create_log3: Optional[shared.CreateLog] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class LogsCreateRequest:
    request: Optional[LogsCreateRequests] = field(default=None)
    

@dataclass
class LogsCreateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    create_log_result: Optional[shared.CreateLogResult] = field(default=None)
    status_code: int = field(default=None)
    
