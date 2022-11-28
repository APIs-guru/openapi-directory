from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Permission:
    r"""Permission
    A Permissions resource represents some extra capability, to be granted to an Android app, which requires explicit consent. An enterprise admin must consent to these permissions on behalf of their users before an entitlement for the app can be created. The permissions collection is read-only. The information provided for each permission (localized name and description) is intended to be used in the MDM user interface when obtaining consent from the enterprise.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    permission_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionId') }})
    
