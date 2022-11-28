from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BucketPublicAccess:
    r"""BucketPublicAccess
    Provides information about the permissions settings that determine whether an S3 bucket is publicly accessible.
    """
    
    effective_permission: Optional[EffectivePermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectivePermission') }})
    permission_configuration: Optional[BucketPermissionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionConfiguration') }})
    
