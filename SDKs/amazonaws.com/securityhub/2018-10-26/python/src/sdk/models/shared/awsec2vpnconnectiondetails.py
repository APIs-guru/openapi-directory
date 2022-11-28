from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEc2VpnConnectionDetails:
    r"""AwsEc2VpnConnectionDetails
    Details about an Amazon EC2 VPN connection.
    """
    
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Category') }})
    customer_gateway_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerGatewayConfiguration') }})
    customer_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerGatewayId') }})
    options: Optional[AwsEc2VpnConnectionOptionsDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    routes: Optional[List[AwsEc2VpnConnectionRoutesDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Routes') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    transit_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransitGatewayId') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    vgw_telemetry: Optional[List[AwsEc2VpnConnectionVgwTelemetryDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VgwTelemetry') }})
    vpn_connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpnConnectionId') }})
    vpn_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpnGatewayId') }})
    
