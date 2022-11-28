from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SiteStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    REQUIRES_REVIEW = "REQUIRES_REVIEW"
    GETTING_READY = "GETTING_READY"
    READY = "READY"
    NEEDS_ATTENTION = "NEEDS_ATTENTION"


@dataclass_json
@dataclass
class Site:
    r"""Site
    Representation of a Site.
    """
    
    auto_ads_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoAdsEnabled') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reporting_dimension_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportingDimensionId') }})
    state: Optional[SiteStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
