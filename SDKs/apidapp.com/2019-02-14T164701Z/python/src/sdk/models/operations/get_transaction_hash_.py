from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetTransactionHashPathParams:
    hash: str = field(metadata={'path_param': { 'field_name': 'hash', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionHashSecurity:
    key2: shared.SchemeKey2 = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTransactionHashRequest:
    path_params: GetTransactionHashPathParams = field()
    security: GetTransactionHashSecurity = field()
    

@dataclass
class GetTransactionHashResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
