from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItvCardDetails:
    card_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_type') }})
    exp_month: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exp_month') }})
    exp_year: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exp_year') }})
    last4: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last4') }})
    
