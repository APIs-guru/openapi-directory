from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomDataIdentifiers:
    r"""CustomDataIdentifiers
    Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that they detected for the finding.
    """
    
    detections: Optional[List[CustomDetection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detections') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    
