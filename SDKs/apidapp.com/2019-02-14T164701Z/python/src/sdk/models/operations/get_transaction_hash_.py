from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetTransactionHashPathParams:
    hash: str = field(default=None, metadata={'path_param': { 'field_name': 'hash', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionHashSecurity:
    key2: shared.SchemeKey2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTransactionHashRequest:
    path_params: GetTransactionHashPathParams = field(default=None)
    security: GetTransactionHashSecurity = field(default=None)
    

@dataclass
class GetTransactionHashResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
