from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OpsEntityItem:
    r"""OpsEntityItem
    The OpsData summary.
    """
    
    capture_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CaptureTime') }})
    content: Optional[List[dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    
