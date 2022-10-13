from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetSnowballUsageResult:
    snowball_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnowballLimit' }})
    snowballs_in_use: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnowballsInUse' }})
    
