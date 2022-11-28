from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SellerFundsSummaryResponse:
    r"""SellerFundsSummaryResponse
    This type is used by the response payload of the getSellerFundsSummary method. All of the funds returned in getSellerFundsSummary are funds that have not yet been paid to the seller through a seller payout. If there are no funds that are pending, on hold, or being processed for the seller's account, no response payload is returned, and an http status code of 204 - No Content is returned instead.
    """
    
    available_funds: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableFunds') }})
    funds_on_hold: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundsOnHold') }})
    processing_funds: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingFunds') }})
    total_funds: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFunds') }})
    
