from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Row:
    r"""Row
    A single row in the confusion matrix.
    """
    
    actual_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actualLabel') }})
    entries: Optional[List[Entry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
