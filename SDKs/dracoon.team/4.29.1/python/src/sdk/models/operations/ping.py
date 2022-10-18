from dataclasses import dataclass, field



@dataclass
class PingResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
