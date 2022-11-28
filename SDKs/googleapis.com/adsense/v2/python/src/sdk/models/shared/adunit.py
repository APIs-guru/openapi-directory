from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AdUnitStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"


@dataclass_json
@dataclass
class AdUnit:
    r"""AdUnit
    Representation of an ad unit. An ad unit represents a saved ad unit with a specific set of ad settings that have been customized within an account.
    """
    
    content_ads_settings: Optional[ContentAdsSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentAdsSettings') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reporting_dimension_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportingDimensionId') }})
    state: Optional[AdUnitStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class AdUnitInput:
    r"""AdUnitInput
    Representation of an ad unit. An ad unit represents a saved ad unit with a specific set of ad settings that have been customized within an account.
    """
    
    content_ads_settings: Optional[ContentAdsSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentAdsSettings') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    state: Optional[AdUnitStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
