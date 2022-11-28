from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SensitiveDataResult:
    r"""SensitiveDataResult
    Contains a detected instance of sensitive data that are based on built-in identifiers.
    """
    
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Category') }})
    detections: Optional[List[SensitiveDataDetections]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Detections') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    
