from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateWorkspaceImagePermissionRequest:
    allow_copy_image: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowCopyImage' }})
    image_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageId' }})
    shared_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedAccountId' }})
    
