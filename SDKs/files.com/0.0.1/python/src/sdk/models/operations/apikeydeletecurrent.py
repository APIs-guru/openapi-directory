from dataclasses import dataclass, field



@dataclass
class APIKeyDeleteCurrentResponse:
    content_type: str = field()
    status_code: int = field()
    
