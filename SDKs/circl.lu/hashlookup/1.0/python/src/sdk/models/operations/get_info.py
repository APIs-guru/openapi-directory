from dataclasses import dataclass, field



@dataclass
class GetInfoResponse:
    content_type: str = field()
    status_code: int = field()
    
