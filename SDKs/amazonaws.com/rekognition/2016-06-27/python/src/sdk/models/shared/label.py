from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Label:
    r"""Label
    <p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.</p> <p> </p>
    """
    
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    instances: Optional[List[Instance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Instances') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    parents: Optional[List[Parent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parents') }})
    
