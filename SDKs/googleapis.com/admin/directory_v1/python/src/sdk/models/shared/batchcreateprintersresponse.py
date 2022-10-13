from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import failureinfo
from . import printer


@dataclass_json
@dataclass
class BatchCreatePrintersResponse:
    failures: Optional[List[failureinfo.FailureInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failures' }})
    printers: Optional[List[printer.Printer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'printers' }})
    
