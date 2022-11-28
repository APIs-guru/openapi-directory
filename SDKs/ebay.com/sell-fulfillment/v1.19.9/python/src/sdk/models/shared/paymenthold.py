from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PaymentHold:
    r"""PaymentHold
    This type contains information about a hold placed on a payment to a seller for an order, including the reason why the buyer's payment for the order is being held, the expected release date of the funds into the seller's account, the current state of the hold, and the actual release date if the payment has been released, and possible actions the seller can take to expedite the payout of funds into their account.
    """
    
    expected_release_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedReleaseDate') }})
    hold_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holdAmount') }})
    hold_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holdReason') }})
    hold_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holdState') }})
    release_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseDate') }})
    seller_actions_to_release: Optional[List[SellerActionsToRelease]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerActionsToRelease') }})
    
