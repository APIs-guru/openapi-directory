from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class OptionsKeyKeyPathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class OptionsKeyKeyRequest:
    path_params: OptionsKeyKeyPathParams = field(default=None)
    

@dataclass
class OptionsKeyKeyResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
