from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import administratorwebtokenspecmanagedconfigurations
from . import administratorwebtokenspecplaysearch
from . import administratorwebtokenspecprivateapps
from . import administratorwebtokenspecstorebuilder
from . import administratorwebtokenspecwebapps
from . import administratorwebtokenspeczerotouch

class AdministratorWebTokenSpecPermissionEnum(str, Enum):
    UNKNOWN = "unknown"
    APPROVE_APPS = "approveApps"
    MANAGE_MCM = "manageMcm"


@dataclass_json
@dataclass
class AdministratorWebTokenSpec:
    managed_configurations: Optional[administratorwebtokenspecmanagedconfigurations.AdministratorWebTokenSpecManagedConfigurations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedConfigurations' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    permission: Optional[List[AdministratorWebTokenSpecPermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    play_search: Optional[administratorwebtokenspecplaysearch.AdministratorWebTokenSpecPlaySearch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playSearch' }})
    private_apps: Optional[administratorwebtokenspecprivateapps.AdministratorWebTokenSpecPrivateApps] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateApps' }})
    store_builder: Optional[administratorwebtokenspecstorebuilder.AdministratorWebTokenSpecStoreBuilder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeBuilder' }})
    web_apps: Optional[administratorwebtokenspecwebapps.AdministratorWebTokenSpecWebApps] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webApps' }})
    zero_touch: Optional[administratorwebtokenspeczerotouch.AdministratorWebTokenSpecZeroTouch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zeroTouch' }})
    
