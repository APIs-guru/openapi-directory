from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import createadrequest


@dataclass_json
@dataclass
class BulkCreateAdRequest:
    requests: Optional[List[createadrequest.CreateAdRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
