from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomerServiceMetricsFilterCriteria:
    customer_service_metric_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerServiceMetricType' }})
    evaluation_marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationMarketplaceId' }})
    listing_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listingCategories' }})
    shipping_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingRegions' }})
    
