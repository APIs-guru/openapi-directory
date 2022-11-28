from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetAccountIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountIDSecurity:
    key2: shared.SchemeKey2 = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAccountIDRequest:
    path_params: GetAccountIDPathParams = field()
    security: GetAccountIDSecurity = field()
    

@dataclass
class GetAccountIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
