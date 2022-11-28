from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DealershipData:
    address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    dealer_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealerName') }})
    ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    state: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    zip_code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zipCode') }})
    
