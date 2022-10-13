from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aclsupdatestatus
from . import reshardingstatus
from . import pendingmodifiedserviceupdate


@dataclass_json
@dataclass
class ClusterPendingUpdates:
    ac_ls: Optional[aclsupdatestatus.AcLsUpdateStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ACLs' }})
    resharding: Optional[reshardingstatus.ReshardingStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resharding' }})
    service_updates: Optional[List[pendingmodifiedserviceupdate.PendingModifiedServiceUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceUpdates' }})
    
