from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import disk
from . import resourcelocation
from . import resourcetype_enum
from . import instancesnapshotstate_enum
from . import tag


@dataclass_json
@dataclass
class InstanceSnapshot:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    from_attached_disks: Optional[List[disk.Disk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromAttachedDisks' }})
    from_blueprint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromBlueprintId' }})
    from_bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromBundleId' }})
    from_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromInstanceArn' }})
    from_instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromInstanceName' }})
    is_from_auto_snapshot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFromAutoSnapshot' }})
    location: Optional[resourcelocation.ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    progress: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    size_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeInGb' }})
    state: Optional[instancesnapshotstate_enum.InstanceSnapshotStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportCode' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
