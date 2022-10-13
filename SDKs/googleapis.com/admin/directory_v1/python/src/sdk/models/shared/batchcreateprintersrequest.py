from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import createprinterrequest


@dataclass_json
@dataclass
class BatchCreatePrintersRequest:
    requests: Optional[List[createprinterrequest.CreatePrinterRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
