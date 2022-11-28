from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FinalizedDealDealServingStatusEnum(str, Enum):
    DEAL_SERVING_STATUS_UNSPECIFIED = "DEAL_SERVING_STATUS_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    ENDED = "ENDED"
    PAUSED_BY_BUYER = "PAUSED_BY_BUYER"
    PAUSED_BY_SELLER = "PAUSED_BY_SELLER"


@dataclass_json
@dataclass
class FinalizedDeal:
    r"""FinalizedDeal
    A finalized deal is a snapshot of the deal when both buyer and seller accept the deal. The buyer or seller can update the deal after it's been finalized and renegotiate on the deal targeting, terms and other fields, while at the same time the finalized snapshot of the deal can still be retrieved using this API. The finalized deal contains a copy of the deal as it existed when most recently finalized, as well as fields related to deal serving such as pause/resume status, RTB metrics, and more.
    """
    
    deal: Optional[Deal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deal') }})
    deal_pausing_info: Optional[DealPausingInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealPausingInfo') }})
    deal_serving_status: Optional[FinalizedDealDealServingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealServingStatus') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ready_to_serve: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readyToServe') }})
    rtb_metrics: Optional[RtbMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rtbMetrics') }})
    
