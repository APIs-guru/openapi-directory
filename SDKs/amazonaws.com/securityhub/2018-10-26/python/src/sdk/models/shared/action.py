from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsapicallaction
from . import dnsrequestaction
from . import networkconnectionaction
from . import portprobeaction


@dataclass_json
@dataclass
class Action:
    action_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionType' }})
    aws_api_call_action: Optional[awsapicallaction.AwsAPICallAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsApiCallAction' }})
    dns_request_action: Optional[dnsrequestaction.DNSRequestAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsRequestAction' }})
    network_connection_action: Optional[networkconnectionaction.NetworkConnectionAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkConnectionAction' }})
    port_probe_action: Optional[portprobeaction.PortProbeAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortProbeAction' }})
    
