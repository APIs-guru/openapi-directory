from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchProductsOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    product_view_aggregations: Optional[dict[str, List[ProductViewAggregationValue]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductViewAggregations') }})
    product_view_summaries: Optional[List[ProductViewSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductViewSummaries') }})
    
