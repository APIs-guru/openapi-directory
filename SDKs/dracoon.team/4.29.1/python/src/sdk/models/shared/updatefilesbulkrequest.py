from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import objectexpiration


@dataclass_json
@dataclass
class UpdateFilesBulkRequest:
    classification: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    expiration: Optional[objectexpiration.ObjectExpiration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration' }})
    object_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectIds' }})
    
