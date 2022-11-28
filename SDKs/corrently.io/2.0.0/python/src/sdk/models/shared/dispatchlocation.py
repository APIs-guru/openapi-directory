from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DispatchLocation:
    energy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energy') }})
    location: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
