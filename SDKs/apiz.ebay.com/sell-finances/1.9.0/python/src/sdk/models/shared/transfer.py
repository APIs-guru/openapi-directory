from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import fundingsource
from . import amount
from . import transferdetail


@dataclass_json
@dataclass
class Transfer:
    funding_source: Optional[fundingsource.FundingSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingSource' }})
    transaction_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionDate' }})
    transfer_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferAmount' }})
    transfer_detail: Optional[transferdetail.TransferDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferDetail' }})
    transfer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferId' }})
    
