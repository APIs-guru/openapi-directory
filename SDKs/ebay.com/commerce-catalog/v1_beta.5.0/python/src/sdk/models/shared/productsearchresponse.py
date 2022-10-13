from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import productsummary
from . import refinement


@dataclass_json
@dataclass
class ProductSearchResponse:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    product_summaries: Optional[List[productsummary.ProductSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productSummaries' }})
    refinement: Optional[refinement.Refinement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refinement' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
