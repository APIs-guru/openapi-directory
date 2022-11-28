from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroceryListGetResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api2_grocery_list: Optional[shared.BigOvenModelApi2GroceryList] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
