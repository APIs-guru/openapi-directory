from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ErrorRootCauseEntity:
    r"""ErrorRootCauseEntity
    A collection of segments and corresponding subsegments associated to a trace summary error.
    """
    
    exceptions: Optional[List[RootCauseException]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Exceptions') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    remote: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Remote') }})
    
