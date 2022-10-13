from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProductsResponse:
    content_type: str = field(default=None)
    product_model_haljsons: Optional[List[shared.ProductModelHaljson]] = field(default=None)
    product_models: Optional[List[shared.ProductModel]] = field(default=None)
    status_code: int = field(default=None)
    
