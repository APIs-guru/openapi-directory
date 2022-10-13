from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimePartitioning:
    expiration_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationMs' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    require_partition_filter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requirePartitionFilter' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
