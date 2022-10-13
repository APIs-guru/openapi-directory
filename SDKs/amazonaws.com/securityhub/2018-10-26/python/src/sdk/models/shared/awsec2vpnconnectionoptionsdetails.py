from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsec2vpnconnectionoptionstunneloptionsdetails


@dataclass_json
@dataclass
class AwsEc2VpnConnectionOptionsDetails:
    static_routes_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StaticRoutesOnly' }})
    tunnel_options: Optional[List[awsec2vpnconnectionoptionstunneloptionsdetails.AwsEc2VpnConnectionOptionsTunnelOptionsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TunnelOptions' }})
    
