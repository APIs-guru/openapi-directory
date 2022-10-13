from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deleteadrequest


@dataclass_json
@dataclass
class BulkDeleteAdRequest:
    requests: Optional[List[deleteadrequest.DeleteAdRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
