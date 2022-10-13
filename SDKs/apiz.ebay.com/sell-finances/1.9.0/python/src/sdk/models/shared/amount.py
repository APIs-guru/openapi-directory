from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Amount:
    converted_from_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'convertedFromCurrency' }})
    converted_from_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'convertedFromValue' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    exchange_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exchangeRate' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
