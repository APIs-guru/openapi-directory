from dataclasses import dataclass, field



@dataclass
class ResendEmailToVerifyUserResponse:
    content_type: str = field()
    status_code: int = field()
    
