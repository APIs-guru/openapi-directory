from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TotalByOffice:
    election_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_year') }})
    office: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('office') }})
    total_disbursements: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_disbursements') }})
    total_receipts: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_receipts') }})
    
