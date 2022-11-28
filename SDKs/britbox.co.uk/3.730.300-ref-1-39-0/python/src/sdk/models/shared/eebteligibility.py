from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EeBtEligibility:
    eligible: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eligible') }})
    plan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
