from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Amount:
    r"""Amount
    The type that defines the fields for the currency and a monetary amount.
    """
    
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
