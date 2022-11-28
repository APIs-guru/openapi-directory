from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Attachment:
    r"""Attachment
    The configuration and status for a single subnet that you've specified for use by the AWS Network Firewall firewall. This is part of the <a>FirewallStatus</a>.
    """
    
    endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointId') }})
    status: Optional[AttachmentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    
