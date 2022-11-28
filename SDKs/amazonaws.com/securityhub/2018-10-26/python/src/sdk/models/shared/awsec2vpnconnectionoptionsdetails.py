from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEc2VpnConnectionOptionsDetails:
    r"""AwsEc2VpnConnectionOptionsDetails
    VPN connection options.
    """
    
    static_routes_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StaticRoutesOnly') }})
    tunnel_options: Optional[List[AwsEc2VpnConnectionOptionsTunnelOptionsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TunnelOptions') }})
    
