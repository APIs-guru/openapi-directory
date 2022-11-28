from dataclasses import dataclass, field



@dataclass
class PostCheckWaitlistStatusResponse:
    content_type: str = field()
    status_code: int = field()
    
