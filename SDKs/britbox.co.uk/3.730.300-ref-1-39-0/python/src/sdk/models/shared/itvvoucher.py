from dataclasses import dataclass, field
from typing import Any
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ItvVoucherOfferTypeEnum(str, Enum):
    STRIPE = "stripe"
    TALON_ONE = "talon one"


@dataclass_json
@dataclass
class ItvVoucher:
    display: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    links: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    offer_type: ItvVoucherOfferTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerType') }})
    
