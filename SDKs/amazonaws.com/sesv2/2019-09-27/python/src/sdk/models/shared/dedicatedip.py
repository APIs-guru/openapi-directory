from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DedicatedIP:
    r"""DedicatedIP
    <p>Contains information about a dedicated IP address that is associated with your Amazon SES account.</p> <p>To learn more about requesting dedicated IP addresses, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html\">Requesting and Relinquishing Dedicated IP Addresses</a> in the <i>Amazon SES Developer Guide</i>.</p>
    """
    
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ip') }})
    warmup_percentage: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WarmupPercentage') }})
    warmup_status: WarmupStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WarmupStatus') }})
    pool_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PoolName') }})
    
