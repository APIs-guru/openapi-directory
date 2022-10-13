from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchdashboard
from . import provisionedproductdetail


@dataclass_json
@dataclass
class DescribeProvisionedProductOutput:
    cloud_watch_dashboards: Optional[List[cloudwatchdashboard.CloudWatchDashboard]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchDashboards' }})
    provisioned_product_detail: Optional[provisionedproductdetail.ProvisionedProductDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductDetail' }})
    
