from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetBlockIDTransactionPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBlockIDTransactionSecurity:
    key2: shared.SchemeKey2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBlockIDTransactionRequest:
    path_params: GetBlockIDTransactionPathParams = field(default=None)
    security: GetBlockIDTransactionSecurity = field(default=None)
    

@dataclass
class GetBlockIDTransactionResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
