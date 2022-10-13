from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import provisionedproductplandetails
from . import resourcechange


@dataclass_json
@dataclass
class DescribeProvisionedProductPlanOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    provisioned_product_plan_details: Optional[provisionedproductplandetails.ProvisionedProductPlanDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductPlanDetails' }})
    resource_changes: Optional[List[resourcechange.ResourceChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceChanges' }})
    
