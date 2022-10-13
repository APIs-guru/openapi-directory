from dataclasses import dataclass, field
from typing import Any,Enum
from dataclasses_json import dataclass_json

class ItvVoucherOfferTypeEnum(str, Enum):
    STRIPE = "stripe"
    TALON_ONE = "talon one"


@dataclass_json
@dataclass
class ItvVoucher:
    display: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    offer_type: ItvVoucherOfferTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerType' }})
    
