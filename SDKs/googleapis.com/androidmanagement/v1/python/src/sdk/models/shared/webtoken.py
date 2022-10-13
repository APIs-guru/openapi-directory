from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    enabled_features: Optional[List[WebTokenEnabledFeaturesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabledFeatures' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_frame_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentFrameUrl' }})
    permissions: Optional[List[WebTokenPermissionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
