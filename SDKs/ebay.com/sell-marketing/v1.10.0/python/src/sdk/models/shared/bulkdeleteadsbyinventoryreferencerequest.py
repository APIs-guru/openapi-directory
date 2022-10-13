from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deleteadsbyinventoryreferencerequest


@dataclass_json
@dataclass
class BulkDeleteAdsByInventoryReferenceRequest:
    requests: Optional[List[deleteadsbyinventoryreferencerequest.DeleteAdsByInventoryReferenceRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
