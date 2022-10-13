from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import snapshotreservationdetail

class VolumePerformanceTierEnum(str, Enum):
    VOLUME_PERFORMANCE_TIER_UNSPECIFIED = "VOLUME_PERFORMANCE_TIER_UNSPECIFIED"
    VOLUME_PERFORMANCE_TIER_SHARED = "VOLUME_PERFORMANCE_TIER_SHARED"
    VOLUME_PERFORMANCE_TIER_ASSIGNED = "VOLUME_PERFORMANCE_TIER_ASSIGNED"
    VOLUME_PERFORMANCE_TIER_HT = "VOLUME_PERFORMANCE_TIER_HT"

class VolumeProtocolEnum(str, Enum):
    PROTOCOL_UNSPECIFIED = "PROTOCOL_UNSPECIFIED"
    FIBRE_CHANNEL = "FIBRE_CHANNEL"
    NFS = "NFS"

class VolumeSnapshotAutoDeleteBehaviorEnum(str, Enum):
    SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED = "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED"
    DISABLED = "DISABLED"
    OLDEST_FIRST = "OLDEST_FIRST"
    NEWEST_FIRST = "NEWEST_FIRST"

class VolumeStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    DELETING = "DELETING"
    UPDATING = "UPDATING"

class VolumeStorageTypeEnum(str, Enum):
    STORAGE_TYPE_UNSPECIFIED = "STORAGE_TYPE_UNSPECIFIED"
    SSD = "SSD"
    HDD = "HDD"


@dataclass_json
@dataclass
class Volume:
    auto_grown_size_gib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoGrownSizeGib' }})
    boot_volume: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootVolume' }})
    current_size_gib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentSizeGib' }})
    emergency_size_gib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emergencySizeGib' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    max_size_gib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSizeGib' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    originally_requested_size_gib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originallyRequestedSizeGib' }})
    performance_tier: Optional[VolumePerformanceTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performanceTier' }})
    pod: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pod' }})
    protocol: Optional[VolumeProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    remaining_space_gib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remainingSpaceGib' }})
    requested_size_gib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedSizeGib' }})
    snapshot_auto_delete_behavior: Optional[VolumeSnapshotAutoDeleteBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotAutoDeleteBehavior' }})
    snapshot_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotEnabled' }})
    snapshot_reservation_detail: Optional[snapshotreservationdetail.SnapshotReservationDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotReservationDetail' }})
    snapshot_schedule_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotSchedulePolicy' }})
    state: Optional[VolumeStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    storage_type: Optional[VolumeStorageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageType' }})
    
