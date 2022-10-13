from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UploadSummary:
    failure_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCount' }})
    success_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successCount' }})
    
