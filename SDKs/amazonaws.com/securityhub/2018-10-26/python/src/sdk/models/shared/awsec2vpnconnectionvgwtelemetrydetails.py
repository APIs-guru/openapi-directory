from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEc2VpnConnectionVgwTelemetryDetails:
    accepted_route_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptedRouteCount' }})
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateArn' }})
    last_status_change: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastStatusChange' }})
    outside_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutsideIpAddress' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    
