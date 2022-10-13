from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostAccountSecurity:
    key2: shared.SchemeKey2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostAccountRequest:
    security: PostAccountSecurity = field(default=None)
    

@dataclass
class PostAccountResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
