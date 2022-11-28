from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Currency:
    r"""Currency
    Currency
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    decimal_digits: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decimalDigits') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    name_plural: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('namePlural') }})
    rounding: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rounding') }})
    symbol: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbol') }})
    symbol_native: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbolNative') }})
    
