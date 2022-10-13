from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import autoinstallpolicy
from . import enterpriseauthenticationapplinkconfig
from . import managedconfiguration

class ProductPolicyAutoUpdateModeEnum(str, Enum):
    AUTO_UPDATE_MODE_UNSPECIFIED = "autoUpdateModeUnspecified"
    AUTO_UPDATE_DEFAULT = "autoUpdateDefault"
    AUTO_UPDATE_POSTPONED = "autoUpdatePostponed"
    AUTO_UPDATE_HIGH_PRIORITY = "autoUpdateHighPriority"

class ProductPolicyTracksEnum(str, Enum):
    APP_TRACK_UNSPECIFIED = "appTrackUnspecified"
    PRODUCTION = "production"
    BETA = "beta"
    ALPHA = "alpha"


@dataclass_json
@dataclass
class ProductPolicy:
    auto_install_policy: Optional[autoinstallpolicy.AutoInstallPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoInstallPolicy' }})
    auto_update_mode: Optional[ProductPolicyAutoUpdateModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoUpdateMode' }})
    enterprise_authentication_app_link_configs: Optional[List[enterpriseauthenticationapplinkconfig.EnterpriseAuthenticationAppLinkConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enterpriseAuthenticationAppLinkConfigs' }})
    managed_configuration: Optional[managedconfiguration.ManagedConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedConfiguration' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    track_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackIds' }})
    tracks: Optional[List[ProductPolicyTracksEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracks' }})
    
