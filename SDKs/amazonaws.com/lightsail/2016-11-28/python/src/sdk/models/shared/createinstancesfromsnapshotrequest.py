from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import addonrequest
from . import diskmap
from . import ipaddresstype_enum
from . import tag


@dataclass_json
@dataclass
class CreateInstancesFromSnapshotRequest:
    add_ons: Optional[List[addonrequest.AddOnRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addOns' }})
    attached_disk_mapping: Optional[dict[str, List[diskmap.DiskMap]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachedDiskMapping' }})
    availability_zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityZone' }})
    bundle_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleId' }})
    instance_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceNames' }})
    instance_snapshot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceSnapshotName' }})
    ip_address_type: Optional[ipaddresstype_enum.IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddressType' }})
    key_pair_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPairName' }})
    restore_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restoreDate' }})
    source_instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceInstanceName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    use_latest_restorable_auto_snapshot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useLatestRestorableAutoSnapshot' }})
    user_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userData' }})
    
