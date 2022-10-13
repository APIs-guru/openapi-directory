from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import product


@dataclass_json
@dataclass
class GetOffersResponse:
    products: Optional[List[product.Product]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    
