from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import productviewaggregationvalue
from . import productviewsummary


@dataclass_json
@dataclass
class SearchProductsOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    product_view_aggregations: Optional[dict[str, List[productviewaggregationvalue.ProductViewAggregationValue]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductViewAggregations' }})
    product_view_summaries: Optional[List[productviewsummary.ProductViewSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductViewSummaries' }})
    
