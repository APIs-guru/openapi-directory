from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FirewallStatus:
    r"""FirewallStatus
    Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.
    """
    
    configuration_sync_state_summary: ConfigurationSyncStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSyncStateSummary') }})
    status: FirewallStatusValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    sync_states: Optional[dict[str, SyncState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncStates') }})
    
