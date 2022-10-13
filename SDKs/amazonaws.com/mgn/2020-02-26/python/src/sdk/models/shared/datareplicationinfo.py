from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datareplicationerror
from . import datareplicationinitiation
from . import datareplicationstate_enum
from . import datareplicationinforeplicateddisk


@dataclass_json
@dataclass
class DataReplicationInfo:
    data_replication_error: Optional[datareplicationerror.DataReplicationError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataReplicationError' }})
    data_replication_initiation: Optional[datareplicationinitiation.DataReplicationInitiation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataReplicationInitiation' }})
    data_replication_state: Optional[datareplicationstate_enum.DataReplicationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataReplicationState' }})
    eta_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etaDateTime' }})
    lag_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lagDuration' }})
    replicated_disks: Optional[List[datareplicationinforeplicateddisk.DataReplicationInfoReplicatedDisk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicatedDisks' }})
    
