from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostDomainsRegistrationsRequest:
    request: Optional[shared.RegisterDomain] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostDomainsRegistrationsResponse:
    content_type: str = field()
    status_code: int = field()
    
