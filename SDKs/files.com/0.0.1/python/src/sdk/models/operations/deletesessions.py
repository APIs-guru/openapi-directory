from dataclasses import dataclass, field



@dataclass
class DeleteSessionsResponse:
    content_type: str = field()
    status_code: int = field()
    
