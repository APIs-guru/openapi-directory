from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BehaviorEntity:
    r"""BehaviorEntity
    List Behaviors
    """
    
    attachment_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachment_url') }})
    behavior: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('behavior') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
