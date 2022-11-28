from dataclasses import dataclass, field



@dataclass
class GetGetChannelsResponse:
    content_type: str = field()
    status_code: int = field()
    
