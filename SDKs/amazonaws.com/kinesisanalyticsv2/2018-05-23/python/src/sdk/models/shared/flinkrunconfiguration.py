from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FlinkRunConfiguration:
    allow_non_restored_state: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowNonRestoredState' }})
    
