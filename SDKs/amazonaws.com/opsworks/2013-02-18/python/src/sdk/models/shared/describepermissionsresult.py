from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribePermissionsResult:
    r"""DescribePermissionsResult
    Contains the response to a <code>DescribePermissions</code> request.
    """
    
    permissions: Optional[List[Permission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    
