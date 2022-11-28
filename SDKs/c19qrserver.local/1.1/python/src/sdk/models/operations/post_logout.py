from dataclasses import dataclass, field



@dataclass
class PostLogoutResponse:
    content_type: str = field()
    status_code: int = field()
    
