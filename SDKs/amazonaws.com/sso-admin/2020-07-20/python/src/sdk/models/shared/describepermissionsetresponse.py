from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribePermissionSetResponse:
    permission_set: Optional[PermissionSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionSet') }})
    
