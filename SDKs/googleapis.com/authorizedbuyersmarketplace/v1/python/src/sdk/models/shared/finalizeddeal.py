from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deal
from . import dealpausinginfo
from . import rtbmetrics

class FinalizedDealDealServingStatusEnum(str, Enum):
    DEAL_SERVING_STATUS_UNSPECIFIED = "DEAL_SERVING_STATUS_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    ENDED = "ENDED"
    PAUSED_BY_BUYER = "PAUSED_BY_BUYER"
    PAUSED_BY_SELLER = "PAUSED_BY_SELLER"


@dataclass_json
@dataclass
class FinalizedDeal:
    deal: Optional[deal.Deal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deal' }})
    deal_pausing_info: Optional[dealpausinginfo.DealPausingInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealPausingInfo' }})
    deal_serving_status: Optional[FinalizedDealDealServingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealServingStatus' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ready_to_serve: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readyToServe' }})
    rtb_metrics: Optional[rtbmetrics.RtbMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rtbMetrics' }})
    
