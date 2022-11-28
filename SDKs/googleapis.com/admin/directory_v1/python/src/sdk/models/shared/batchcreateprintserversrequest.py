from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchCreatePrintServersRequestInput:
    r"""BatchCreatePrintServersRequestInput
    Request to add multiple new print servers in a batch.
    """
    
    requests: Optional[List[CreatePrintServerRequestInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
