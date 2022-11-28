from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class OptionsKeyKeyPathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class OptionsKeyKeyRequest:
    path_params: OptionsKeyKeyPathParams = field()
    

@dataclass
class OptionsKeyKeyResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
