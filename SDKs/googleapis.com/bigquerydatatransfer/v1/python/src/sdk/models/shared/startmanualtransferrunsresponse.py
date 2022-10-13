from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import transferrun


@dataclass_json
@dataclass
class StartManualTransferRunsResponse:
    runs: Optional[List[transferrun.TransferRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runs' }})
    
