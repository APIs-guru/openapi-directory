from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class OptionsBlockIDTransactionPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OptionsBlockIDTransactionRequest:
    path_params: OptionsBlockIDTransactionPathParams = field()
    

@dataclass
class OptionsBlockIDTransactionResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
