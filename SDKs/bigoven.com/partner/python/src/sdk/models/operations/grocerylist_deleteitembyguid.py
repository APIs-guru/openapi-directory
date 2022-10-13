from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GroceryListDeleteItemByGUIDPathParams:
    guid: str = field(default=None, metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroceryListDeleteItemByGUIDRequest:
    path_params: GroceryListDeleteItemByGUIDPathParams = field(default=None)
    

@dataclass
class GroceryListDeleteItemByGUIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
