from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsElbLoadBalancerAttributes:
    r"""AwsElbLoadBalancerAttributes
    Contains attributes for the load balancer.
    """
    
    access_log: Optional[AwsElbLoadBalancerAccessLog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessLog') }})
    connection_draining: Optional[AwsElbLoadBalancerConnectionDraining] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionDraining') }})
    connection_settings: Optional[AwsElbLoadBalancerConnectionSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionSettings') }})
    cross_zone_load_balancing: Optional[AwsElbLoadBalancerCrossZoneLoadBalancing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrossZoneLoadBalancing') }})
    
