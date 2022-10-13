from dataclasses import dataclass, field



@dataclass
class GetLabelSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLabelRequest:
    security: GetLabelSecurity = field(default=None)
    

@dataclass
class GetLabelResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
