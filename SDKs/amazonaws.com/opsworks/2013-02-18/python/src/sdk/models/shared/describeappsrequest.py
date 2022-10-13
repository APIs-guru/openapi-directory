from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeAppsRequest:
    app_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppIds' }})
    stack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    
