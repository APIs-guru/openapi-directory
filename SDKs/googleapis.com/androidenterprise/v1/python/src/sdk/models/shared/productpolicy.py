from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""ProductPolicy
    The policy for a product.
    """
    
    auto_install_policy: Optional[AutoInstallPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoInstallPolicy') }})
    auto_update_mode: Optional[ProductPolicyAutoUpdateModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoUpdateMode') }})
    enterprise_authentication_app_link_configs: Optional[List[EnterpriseAuthenticationAppLinkConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enterpriseAuthenticationAppLinkConfigs') }})
    managed_configuration: Optional[ManagedConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedConfiguration') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    track_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackIds') }})
    tracks: Optional[List[ProductPolicyTracksEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracks') }})
    
