from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResolvedTargets:
    parameter_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterValues' }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Truncated' }})
    
