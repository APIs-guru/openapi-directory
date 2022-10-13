from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostTransactionSecurity:
    key2: shared.SchemeKey2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostTransactionRequest:
    security: PostTransactionSecurity = field(default=None)
    

@dataclass
class PostTransactionResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
