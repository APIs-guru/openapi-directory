from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SiteSummaryResponseAbusiveStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PASSING = "PASSING"
    FAILING = "FAILING"

class SiteSummaryResponseFilterStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    ON = "ON"
    OFF = "OFF"
    PAUSED = "PAUSED"
    PENDING = "PENDING"


@dataclass_json
@dataclass
class SiteSummaryResponse:
    abusive_status: Optional[SiteSummaryResponseAbusiveStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abusiveStatus' }})
    enforcement_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforcementTime' }})
    filter_status: Optional[SiteSummaryResponseFilterStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterStatus' }})
    last_change_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastChangeTime' }})
    report_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportUrl' }})
    reviewed_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewedSite' }})
    under_review: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'underReview' }})
    
