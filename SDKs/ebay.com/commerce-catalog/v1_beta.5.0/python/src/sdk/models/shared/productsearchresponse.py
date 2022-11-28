from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductSearchResponse:
    r"""ProductSearchResponse
    This type contains the specifications for the collection of products that match the search or filter criteria of a search call. A maximum of 200 product summaries is returned (the result set), fewer if you include the limit query parameter in the request.
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    product_summaries: Optional[List[ProductSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSummaries') }})
    refinement: Optional[Refinement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refinement') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
