from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class OptionsBlockIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OptionsBlockIDRequest:
    path_params: OptionsBlockIDPathParams = field()
    

@dataclass
class OptionsBlockIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
