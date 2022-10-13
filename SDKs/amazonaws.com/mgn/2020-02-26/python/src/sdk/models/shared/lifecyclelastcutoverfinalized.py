from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LifeCycleLastCutoverFinalized:
    api_call_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiCallDateTime' }})
    
