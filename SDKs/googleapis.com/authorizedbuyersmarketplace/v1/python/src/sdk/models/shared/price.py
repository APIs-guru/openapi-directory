from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import money

class PriceTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    CPM = "CPM"
    CPD = "CPD"


@dataclass_json
@dataclass
class Price:
    amount: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    type: Optional[PriceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
