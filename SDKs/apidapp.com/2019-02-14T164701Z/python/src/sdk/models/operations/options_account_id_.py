from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class OptionsAccountIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OptionsAccountIDRequest:
    path_params: OptionsAccountIDPathParams = field()
    

@dataclass
class OptionsAccountIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
