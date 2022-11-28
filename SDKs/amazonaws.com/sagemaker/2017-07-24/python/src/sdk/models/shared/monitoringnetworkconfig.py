from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonitoringNetworkConfig:
    r"""MonitoringNetworkConfig
    The networking configuration for the monitoring job.
    """
    
    enable_inter_container_traffic_encryption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableInterContainerTrafficEncryption') }})
    enable_network_isolation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableNetworkIsolation') }})
    vpc_config: Optional[VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
