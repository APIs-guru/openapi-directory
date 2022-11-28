from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum(str, Enum):
    DIMENSION_SCOPE_UNSPECIFIED = "DIMENSION_SCOPE_UNSPECIFIED"
    EVENT = "EVENT"
    USER = "USER"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaCustomDimensionInput:
    r"""GoogleAnalyticsAdminV1alphaCustomDimensionInput
    A definition for a CustomDimension.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disallow_ads_personalization: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disallowAdsPersonalization') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterName') }})
    scope: Optional[GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    

@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaCustomDimension:
    r"""GoogleAnalyticsAdminV1alphaCustomDimension
    A definition for a CustomDimension.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disallow_ads_personalization: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disallowAdsPersonalization') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterName') }})
    scope: Optional[GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
