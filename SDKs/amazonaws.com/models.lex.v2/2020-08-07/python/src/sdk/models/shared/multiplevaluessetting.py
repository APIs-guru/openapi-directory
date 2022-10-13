from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MultipleValuesSetting:
    allow_multiple_values: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowMultipleValues' }})
    
