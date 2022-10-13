from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configurationsyncstate_enum
from . import firewallstatusvalue_enum
from . import syncstate


@dataclass_json
@dataclass
class FirewallStatus:
    configuration_sync_state_summary: configurationsyncstate_enum.ConfigurationSyncStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationSyncStateSummary' }})
    status: firewallstatusvalue_enum.FirewallStatusValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    sync_states: Optional[dict[str, syncstate.SyncState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncStates' }})
    
