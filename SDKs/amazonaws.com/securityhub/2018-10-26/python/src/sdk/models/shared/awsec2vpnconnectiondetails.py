from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsec2vpnconnectionoptionsdetails
from . import awsec2vpnconnectionroutesdetails
from . import awsec2vpnconnectionvgwtelemetrydetails


@dataclass_json
@dataclass
class AwsEc2VpnConnectionDetails:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Category' }})
    customer_gateway_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerGatewayConfiguration' }})
    customer_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerGatewayId' }})
    options: Optional[awsec2vpnconnectionoptionsdetails.AwsEc2VpnConnectionOptionsDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Options' }})
    routes: Optional[List[awsec2vpnconnectionroutesdetails.AwsEc2VpnConnectionRoutesDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Routes' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    transit_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransitGatewayId' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    vgw_telemetry: Optional[List[awsec2vpnconnectionvgwtelemetrydetails.AwsEc2VpnConnectionVgwTelemetryDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VgwTelemetry' }})
    vpn_connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpnConnectionId' }})
    vpn_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpnGatewayId' }})
    
