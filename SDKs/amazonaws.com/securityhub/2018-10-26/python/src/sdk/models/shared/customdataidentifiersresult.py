from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomDataIdentifiersResult:
    r"""CustomDataIdentifiersResult
    Contains an instance of sensitive data that was detected by a customer-defined identifier.
    """
    
    detections: Optional[List[CustomDataIdentifiersDetections]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Detections') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    
