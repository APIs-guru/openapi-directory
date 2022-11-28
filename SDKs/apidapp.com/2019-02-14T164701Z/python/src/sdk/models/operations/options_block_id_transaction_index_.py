from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class OptionsBlockIDTransactionIndexPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    index: str = field(metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    

@dataclass
class OptionsBlockIDTransactionIndexRequest:
    path_params: OptionsBlockIDTransactionIndexPathParams = field()
    

@dataclass
class OptionsBlockIDTransactionIndexResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
