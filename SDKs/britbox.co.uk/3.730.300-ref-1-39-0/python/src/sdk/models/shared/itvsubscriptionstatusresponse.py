from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItvSubscriptionStatusResponse:
    is_active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_active') }})
    
