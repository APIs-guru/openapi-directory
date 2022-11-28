from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProductPermissionStateEnum(str, Enum):
    REQUIRED = "required"
    ACCEPTED = "accepted"


@dataclass_json
@dataclass
class ProductPermission:
    r"""ProductPermission
    A product permissions resource represents the set of permissions required by a specific app and whether or not they have been accepted by an enterprise admin. The API can be used to read the set of permissions, and also to update the set to indicate that permissions have been accepted.
    """
    
    permission_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionId') }})
    state: Optional[ProductPermissionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
