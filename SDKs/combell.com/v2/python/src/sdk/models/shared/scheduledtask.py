from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScheduledTask:
    cron_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cron_expression' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    script_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script_location' }})
    
