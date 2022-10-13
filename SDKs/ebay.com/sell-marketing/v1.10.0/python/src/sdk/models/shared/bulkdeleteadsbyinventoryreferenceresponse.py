from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deleteadsbyinventoryreferenceresponse


@dataclass_json
@dataclass
class BulkDeleteAdsByInventoryReferenceResponse:
    responses: Optional[List[deleteadsbyinventoryreferenceresponse.DeleteAdsByInventoryReferenceResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    
