from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetExchangeRate:
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    ok: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    rate: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    
