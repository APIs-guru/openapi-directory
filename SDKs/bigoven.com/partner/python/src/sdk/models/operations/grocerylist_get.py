from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GroceryListGetResponse:
    big_oven_model_api2_grocery_list: Optional[shared.BigOvenModelApi2GroceryList] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
