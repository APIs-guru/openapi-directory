from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchDeletePrintersResponse:
    r"""BatchDeletePrintersResponse
    Response for deleting existing printers in batch.
    """
    
    failed_printers: Optional[List[FailureInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedPrinters') }})
    printer_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printerIds') }})
    
