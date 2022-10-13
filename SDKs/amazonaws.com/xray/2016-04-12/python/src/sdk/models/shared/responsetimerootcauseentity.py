from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResponseTimeRootCauseEntity:
    coverage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Coverage' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    remote: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Remote' }})
    
