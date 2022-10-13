from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RowLevelSecurityStatistics:
    row_level_security_applied: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowLevelSecurityApplied' }})
    
