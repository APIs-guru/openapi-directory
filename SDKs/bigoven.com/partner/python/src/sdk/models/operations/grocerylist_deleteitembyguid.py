from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GroceryListDeleteItemByGUIDPathParams:
    guid: str = field(metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroceryListDeleteItemByGUIDRequest:
    path_params: GroceryListDeleteItemByGUIDPathParams = field()
    

@dataclass
class GroceryListDeleteItemByGUIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
