from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import failureinfo


@dataclass_json
@dataclass
class BatchDeletePrintersResponse:
    failed_printers: Optional[List[failureinfo.FailureInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedPrinters' }})
    printer_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'printerIds' }})
    
