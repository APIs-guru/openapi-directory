from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvFeatureFlag:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    flag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flag' }})
    
