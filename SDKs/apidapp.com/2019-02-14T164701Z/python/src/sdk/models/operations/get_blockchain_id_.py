from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetBlockchainIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBlockchainIDSecurity:
    key2: shared.SchemeKey2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBlockchainIDRequest:
    path_params: GetBlockchainIDPathParams = field(default=None)
    security: GetBlockchainIDSecurity = field(default=None)
    

@dataclass
class GetBlockchainIDResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
