from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import transactions

class BalanceVariationEnum(str, Enum):
    GSB = "gsb"
    ERZEUGUNG = "erzeugung"
    EIGENSTROM = "eigenstrom"
    CO2 = "co2"
    BAEUME = "baeume"


@dataclass_json
@dataclass
class Balance:
    balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    haben: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'haben' }})
    soll: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'soll' }})
    txs: Optional[List[transactions.Transactions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txs' }})
    variation: Optional[BalanceVariationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variation' }})
    
