from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetBlockIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBlockIDSecurity:
    key2: shared.SchemeKey2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBlockIDRequest:
    path_params: GetBlockIDPathParams = field(default=None)
    security: GetBlockIDSecurity = field(default=None)
    

@dataclass
class GetBlockIDResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
