from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SyncState:
    r"""SyncState
    <p>The status of the firewall endpoint and firewall policy configuration for a single VPC subnet. </p> <p>For each VPC subnet that you associate with a firewall, AWS Network Firewall does the following: </p> <ul> <li> <p>Instantiates a firewall endpoint in the subnet, ready to take traffic.</p> </li> <li> <p>Configures the endpoint with the current firewall policy settings, to provide the filtering behavior for the endpoint.</p> </li> </ul> <p>When you update a firewall, for example to add a subnet association or change a rule group in the firewall policy, the affected sync states reflect out-of-sync or not ready status until the changes are complete. </p>
    """
    
    attachment: Optional[Attachment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attachment') }})
    config: Optional[dict[str, PerObjectStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Config') }})
    
