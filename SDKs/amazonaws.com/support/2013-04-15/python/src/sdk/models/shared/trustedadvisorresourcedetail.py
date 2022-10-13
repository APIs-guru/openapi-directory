from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TrustedAdvisorResourceDetail:
    is_suppressed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSuppressed' }})
    metadata: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
