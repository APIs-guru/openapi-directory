from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RequestCountAllocation:
    proxy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxy' }})
    unify: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unify' }})
    vault: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vault' }})
    
