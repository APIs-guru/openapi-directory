from dataclasses import dataclass, field



@dataclass
class PostGetReleaseNotesResponse:
    content_type: str = field()
    status_code: int = field()
    
