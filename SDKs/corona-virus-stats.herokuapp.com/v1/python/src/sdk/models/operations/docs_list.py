from dataclasses import dataclass, field



@dataclass
class DocsListResponse:
    content_type: str = field()
    status_code: int = field()
    
