from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetContractIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContractIDSecurity:
    key2: shared.SchemeKey2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetContractIDRequest:
    path_params: GetContractIDPathParams = field(default=None)
    security: GetContractIDSecurity = field(default=None)
    

@dataclass
class GetContractIDResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
