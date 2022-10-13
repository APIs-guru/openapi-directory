from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import addontype_enum
from . import autosnapshotaddonrequest


@dataclass_json
@dataclass
class AddOnRequest:
    add_on_type: addontype_enum.AddOnTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addOnType' }})
    auto_snapshot_add_on_request: Optional[autosnapshotaddonrequest.AutoSnapshotAddOnRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoSnapshotAddOnRequest' }})
    
