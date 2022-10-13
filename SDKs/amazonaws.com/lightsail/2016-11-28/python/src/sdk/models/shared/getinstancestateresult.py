from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instancestate


@dataclass_json
@dataclass
class GetInstanceStateResult:
    state: Optional[instancestate.InstanceState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
