from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Licensing:
    os_byol: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osByol' }})
    
