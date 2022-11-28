from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AdministratorWebTokenSpecPermissionEnum(str, Enum):
    UNKNOWN = "unknown"
    APPROVE_APPS = "approveApps"
    MANAGE_MCM = "manageMcm"


@dataclass_json
@dataclass
class AdministratorWebTokenSpec:
    r"""AdministratorWebTokenSpec
    Specification for a token used to generate iframes. The token specifies what data the admin is allowed to modify and the URI the iframe is allowed to communiate with.
    """
    
    managed_configurations: Optional[AdministratorWebTokenSpecManagedConfigurations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedConfigurations') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    permission: Optional[List[AdministratorWebTokenSpecPermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    play_search: Optional[AdministratorWebTokenSpecPlaySearch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playSearch') }})
    private_apps: Optional[AdministratorWebTokenSpecPrivateApps] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateApps') }})
    store_builder: Optional[AdministratorWebTokenSpecStoreBuilder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeBuilder') }})
    web_apps: Optional[AdministratorWebTokenSpecWebApps] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webApps') }})
    zero_touch: Optional[AdministratorWebTokenSpecZeroTouch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zeroTouch') }})
    
