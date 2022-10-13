from dataclasses import dataclass, field



@dataclass
class GroupV2GetAvailableThemesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
