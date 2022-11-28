from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeConnectionAliasPermissionsResult:
    alias_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AliasId') }})
    connection_alias_permissions: Optional[List[ConnectionAliasPermission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionAliasPermissions') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
