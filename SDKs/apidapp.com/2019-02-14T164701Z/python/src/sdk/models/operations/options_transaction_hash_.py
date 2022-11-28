from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class OptionsTransactionHashPathParams:
    hash: str = field(metadata={'path_param': { 'field_name': 'hash', 'style': 'simple', 'explode': False }})
    

@dataclass
class OptionsTransactionHashRequest:
    path_params: OptionsTransactionHashPathParams = field()
    

@dataclass
class OptionsTransactionHashResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
