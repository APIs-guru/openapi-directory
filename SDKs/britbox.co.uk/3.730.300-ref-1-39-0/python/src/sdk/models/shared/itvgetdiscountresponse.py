from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItvGetDiscountResponse:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    headline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headline') }})
    initial_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialCost') }})
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longDescription') }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    offerdurationperiod: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerdurationperiod') }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortDescription') }})
    
