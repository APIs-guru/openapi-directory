from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItvPurchaseRequest:
    card_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardToken') }})
    plan_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('planId') }})
    profile_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileToken') }})
    voucher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voucher') }})
    
