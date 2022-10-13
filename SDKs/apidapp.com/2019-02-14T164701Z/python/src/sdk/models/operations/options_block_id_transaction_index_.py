from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class OptionsBlockIDTransactionIndexPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    index: str = field(default=None, metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    

@dataclass
class OptionsBlockIDTransactionIndexRequest:
    path_params: OptionsBlockIDTransactionIndexPathParams = field(default=None)
    

@dataclass
class OptionsBlockIDTransactionIndexResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
