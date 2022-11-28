from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Transfer:
    r"""Transfer
    This type is the base response type used by TRANSFER transaction type that is returned in the response.
    """
    
    funding_source: Optional[FundingSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingSource') }})
    transaction_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionDate') }})
    transfer_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferAmount') }})
    transfer_detail: Optional[TransferDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferDetail') }})
    transfer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferId') }})
    
