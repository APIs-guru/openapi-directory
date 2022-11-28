from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APIOperation:
    r"""APIOperation
    Identification for an API Operation.
    """
    
    method_selectors: Optional[List[MethodSelector]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodSelectors') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    
