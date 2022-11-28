from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEc2VpnConnectionVgwTelemetryDetails:
    r"""AwsEc2VpnConnectionVgwTelemetryDetails
    Information about the VPN tunnel.
    """
    
    accepted_route_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptedRouteCount') }})
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateArn') }})
    last_status_change: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastStatusChange') }})
    outside_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutsideIpAddress') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    
