from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PlatformSummaryBetterAdsStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PASSING = "PASSING"
    WARNING = "WARNING"
    FAILING = "FAILING"

class PlatformSummaryFilterStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    ON = "ON"
    OFF = "OFF"
    PAUSED = "PAUSED"
    PENDING = "PENDING"

class PlatformSummaryRegionEnum(str, Enum):
    REGION_UNKNOWN = "REGION_UNKNOWN"
    REGION_A = "REGION_A"
    REGION_B = "REGION_B"
    REGION_C = "REGION_C"


@dataclass_json
@dataclass
class PlatformSummary:
    r"""PlatformSummary
    A site's Ad Experience Report summary on a single platform.
    """
    
    better_ads_status: Optional[PlatformSummaryBetterAdsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('betterAdsStatus') }})
    enforcement_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcementTime') }})
    filter_status: Optional[PlatformSummaryFilterStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterStatus') }})
    last_change_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastChangeTime') }})
    region: Optional[List[PlatformSummaryRegionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    report_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportUrl') }})
    under_review: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('underReview') }})
    
