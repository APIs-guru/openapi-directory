from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateMailboxRequest:
    request: Optional[shared.CreateMailboxRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateMailboxResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
