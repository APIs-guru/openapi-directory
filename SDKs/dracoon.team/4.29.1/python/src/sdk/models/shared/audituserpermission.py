from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuditUserPermission:
    r"""AuditUserPermission
    Audit user permissions report
    """
    
    permissions: NodePermissions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    user_first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userFirstName') }})
    user_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    user_last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLastName') }})
    user_login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLogin') }})
    
