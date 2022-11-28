from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WebTokenEnabledFeaturesEnum(str, Enum):
    FEATURE_UNSPECIFIED = "FEATURE_UNSPECIFIED"
    PLAY_SEARCH = "PLAY_SEARCH"
    PRIVATE_APPS = "PRIVATE_APPS"
    WEB_APPS = "WEB_APPS"
    STORE_BUILDER = "STORE_BUILDER"
    MANAGED_CONFIGURATIONS = "MANAGED_CONFIGURATIONS"
    ZERO_TOUCH_CUSTOMER_MANAGEMENT = "ZERO_TOUCH_CUSTOMER_MANAGEMENT"

class WebTokenPermissionsEnum(str, Enum):
    WEB_TOKEN_PERMISSION_UNSPECIFIED = "WEB_TOKEN_PERMISSION_UNSPECIFIED"
    APPROVE_APPS = "APPROVE_APPS"


@dataclass_json
@dataclass
class WebToken:
    r"""WebToken
    A web token used to access the managed Google Play iframe.
    """
    
    enabled_features: Optional[List[WebTokenEnabledFeaturesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledFeatures') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_frame_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentFrameUrl') }})
    permissions: Optional[List[WebTokenPermissionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
