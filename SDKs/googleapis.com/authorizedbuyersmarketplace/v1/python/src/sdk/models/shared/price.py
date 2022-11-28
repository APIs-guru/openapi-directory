from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PriceTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    CPM = "CPM"
    CPD = "CPD"


@dataclass_json
@dataclass
class Price:
    r"""Price
    Represents a price and a pricing type for a deal.
    """
    
    amount: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    type: Optional[PriceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
