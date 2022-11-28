from dataclasses import dataclass, field



@dataclass
class PostBulkmd5Response:
    content_type: str = field()
    status_code: int = field()
    
