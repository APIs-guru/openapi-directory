from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awselbloadbalanceraccesslog
from . import awselbloadbalancerconnectiondraining
from . import awselbloadbalancerconnectionsettings
from . import awselbloadbalancercrosszoneloadbalancing


@dataclass_json
@dataclass
class AwsElbLoadBalancerAttributes:
    access_log: Optional[awselbloadbalanceraccesslog.AwsElbLoadBalancerAccessLog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessLog' }})
    connection_draining: Optional[awselbloadbalancerconnectiondraining.AwsElbLoadBalancerConnectionDraining] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionDraining' }})
    connection_settings: Optional[awselbloadbalancerconnectionsettings.AwsElbLoadBalancerConnectionSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionSettings' }})
    cross_zone_load_balancing: Optional[awselbloadbalancercrosszoneloadbalancing.AwsElbLoadBalancerCrossZoneLoadBalancing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CrossZoneLoadBalancing' }})
    
