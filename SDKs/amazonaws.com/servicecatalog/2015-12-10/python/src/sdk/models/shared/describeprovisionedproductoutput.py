from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeProvisionedProductOutput:
    cloud_watch_dashboards: Optional[List[CloudWatchDashboard]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchDashboards') }})
    provisioned_product_detail: Optional[ProvisionedProductDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductDetail') }})
    
