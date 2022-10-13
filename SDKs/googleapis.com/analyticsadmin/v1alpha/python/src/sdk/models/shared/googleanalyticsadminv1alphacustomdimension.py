from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum(str, Enum):
    DIMENSION_SCOPE_UNSPECIFIED = "DIMENSION_SCOPE_UNSPECIFIED"
    EVENT = "EVENT"
    USER = "USER"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaCustomDimension:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disallow_ads_personalization: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disallowAdsPersonalization' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterName' }})
    scope: Optional[GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    
