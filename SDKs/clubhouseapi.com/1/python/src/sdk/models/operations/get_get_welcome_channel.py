from dataclasses import dataclass, field



@dataclass
class GetGetWelcomeChannelResponse:
    content_type: str = field()
    status_code: int = field()
    
