from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FaultRootCause:
    r"""FaultRootCause
    The root cause information for a trace summary fault.
    """
    
    client_impacting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientImpacting') }})
    services: Optional[List[FaultRootCauseService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Services') }})
    
