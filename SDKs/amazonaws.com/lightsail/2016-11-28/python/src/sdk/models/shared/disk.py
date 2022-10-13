from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import addon
from . import resourcelocation
from . import resourcetype_enum
from . import diskstate_enum
from . import tag


@dataclass_json
@dataclass
class Disk:
    add_ons: Optional[List[addon.AddOn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addOns' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    attached_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachedTo' }})
    attachment_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachmentState' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gb_in_use: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gbInUse' }})
    iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iops' }})
    is_attached: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAttached' }})
    is_system_disk: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSystemDisk' }})
    location: Optional[resourcelocation.ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    size_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeInGb' }})
    state: Optional[diskstate_enum.DiskStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportCode' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
