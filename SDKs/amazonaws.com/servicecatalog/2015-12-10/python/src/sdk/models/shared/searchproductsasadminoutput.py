from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import productviewdetail


@dataclass_json
@dataclass
class SearchProductsAsAdminOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    product_view_details: Optional[List[productviewdetail.ProductViewDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductViewDetails' }})
    
