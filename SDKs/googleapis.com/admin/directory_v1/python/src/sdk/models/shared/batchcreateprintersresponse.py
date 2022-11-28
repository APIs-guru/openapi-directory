from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchCreatePrintersResponse:
    r"""BatchCreatePrintersResponse
    Response for adding new printers in batch.
    """
    
    failures: Optional[List[FailureInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    printers: Optional[List[Printer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printers') }})
    
