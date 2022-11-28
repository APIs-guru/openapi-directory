from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Action:
    r"""Action
    <p>Provides details about one of the following actions that affects or that was taken on a resource:</p> <ul> <li> <p>A remote IP address issued an Amazon Web Services API call</p> </li> <li> <p>A DNS request was received</p> </li> <li> <p>A remote IP address attempted to connect to an EC2 instance</p> </li> <li> <p>A remote IP address attempted a port probe on an EC2 instance</p> </li> </ul>
    """
    
    action_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionType') }})
    aws_api_call_action: Optional[AwsAPICallAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsApiCallAction') }})
    dns_request_action: Optional[DNSRequestAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsRequestAction') }})
    network_connection_action: Optional[NetworkConnectionAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConnectionAction') }})
    port_probe_action: Optional[PortProbeAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortProbeAction') }})
    
