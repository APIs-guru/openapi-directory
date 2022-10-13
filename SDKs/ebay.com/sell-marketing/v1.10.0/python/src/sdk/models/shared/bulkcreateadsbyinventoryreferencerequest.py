from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import createadsbyinventoryreferencerequest


@dataclass_json
@dataclass
class BulkCreateAdsByInventoryReferenceRequest:
    requests: Optional[List[createadsbyinventoryreferencerequest.CreateAdsByInventoryReferenceRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
