from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLabelSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLabelRequest:
    security: GetLabelSecurity = field()
    

@dataclass
class GetLabelResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
