from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import effectivepermission_enum
from . import bucketpermissionconfiguration


@dataclass_json
@dataclass
class BucketPublicAccess:
    effective_permission: Optional[effectivepermission_enum.EffectivePermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectivePermission' }})
    permission_configuration: Optional[bucketpermissionconfiguration.BucketPermissionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionConfiguration' }})
    
