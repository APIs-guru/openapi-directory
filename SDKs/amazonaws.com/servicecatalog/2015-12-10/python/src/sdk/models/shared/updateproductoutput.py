from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import productviewdetail
from . import tag


@dataclass_json
@dataclass
class UpdateProductOutput:
    product_view_detail: Optional[productviewdetail.ProductViewDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductViewDetail' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
