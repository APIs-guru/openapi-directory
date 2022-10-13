from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import currency


@dataclass_json
@dataclass
class CurrencyList:
    currencies: List[currency.Currency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencies' }})
    sum: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    
