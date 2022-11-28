from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeProvisionedProductPlanOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    provisioned_product_plan_details: Optional[ProvisionedProductPlanDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductPlanDetails') }})
    resource_changes: Optional[List[ResourceChange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceChanges') }})
    
