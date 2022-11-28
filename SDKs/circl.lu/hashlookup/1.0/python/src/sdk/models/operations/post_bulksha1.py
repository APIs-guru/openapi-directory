from dataclasses import dataclass, field



@dataclass
class PostBulksha1Response:
    content_type: str = field()
    status_code: int = field()
    
