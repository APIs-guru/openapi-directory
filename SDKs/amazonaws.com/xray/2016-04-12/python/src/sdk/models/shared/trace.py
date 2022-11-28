from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Trace:
    r"""Trace
    A collection of segment documents with matching trace IDs.
    """
    
    duration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Duration') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    limit_exceeded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LimitExceeded') }})
    segments: Optional[List[Segment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Segments') }})
    
