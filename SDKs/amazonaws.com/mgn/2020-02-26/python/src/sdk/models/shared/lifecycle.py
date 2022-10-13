from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lifecyclelastcutover
from . import lifecyclelasttest
from . import lifecyclestate_enum


@dataclass_json
@dataclass
class LifeCycle:
    added_to_service_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addedToServiceDateTime' }})
    elapsed_replication_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elapsedReplicationDuration' }})
    first_byte_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstByteDateTime' }})
    last_cutover: Optional[lifecyclelastcutover.LifeCycleLastCutover] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastCutover' }})
    last_seen_by_service_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSeenByServiceDateTime' }})
    last_test: Optional[lifecyclelasttest.LifeCycleLastTest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastTest' }})
    state: Optional[lifecyclestate_enum.LifeCycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
