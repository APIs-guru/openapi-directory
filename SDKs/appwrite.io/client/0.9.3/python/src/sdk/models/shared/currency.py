from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Currency:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    decimal_digits: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decimalDigits' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    name_plural: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namePlural' }})
    rounding: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rounding' }})
    symbol: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'symbol' }})
    symbol_native: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'symbolNative' }})
    
