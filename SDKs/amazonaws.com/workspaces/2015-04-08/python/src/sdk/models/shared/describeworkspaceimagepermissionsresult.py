from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imagepermission


@dataclass_json
@dataclass
class DescribeWorkspaceImagePermissionsResult:
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageId' }})
    image_permissions: Optional[List[imagepermission.ImagePermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImagePermissions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
