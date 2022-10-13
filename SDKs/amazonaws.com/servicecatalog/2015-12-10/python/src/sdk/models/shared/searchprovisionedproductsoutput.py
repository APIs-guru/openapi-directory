from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import provisionedproductattribute


@dataclass_json
@dataclass
class SearchProvisionedProductsOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    provisioned_products: Optional[List[provisionedproductattribute.ProvisionedProductAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProducts' }})
    total_results_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalResultsCount' }})
    
