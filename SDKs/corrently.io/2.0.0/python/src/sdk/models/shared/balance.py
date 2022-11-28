from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BalanceVariationEnum(str, Enum):
    GSB = "gsb"
    ERZEUGUNG = "erzeugung"
    EIGENSTROM = "eigenstrom"
    CO2 = "co2"
    BAEUME = "baeume"


@dataclass_json
@dataclass
class Balance:
    balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    haben: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('haben') }})
    soll: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('soll') }})
    txs: Optional[List[Transactions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('txs') }})
    variation: Optional[BalanceVariationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variation') }})
    
