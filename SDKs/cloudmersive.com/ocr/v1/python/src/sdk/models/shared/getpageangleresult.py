from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetPageAngleResult:
    angle: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Angle' }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Successful' }})
    
