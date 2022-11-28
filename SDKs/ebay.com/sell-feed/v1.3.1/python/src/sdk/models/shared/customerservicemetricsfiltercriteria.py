from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomerServiceMetricsFilterCriteria:
    r"""CustomerServiceMetricsFilterCriteria
    A complex data type that filters data for report creation. See CustomerServiceMetricsFilterCriteria for fields and descriptions.
    """
    
    customer_service_metric_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerServiceMetricType') }})
    evaluation_marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationMarketplaceId') }})
    listing_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingCategories') }})
    shipping_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingRegions') }})
    
