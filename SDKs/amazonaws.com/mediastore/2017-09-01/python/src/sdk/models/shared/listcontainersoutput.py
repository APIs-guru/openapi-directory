from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import container


@dataclass_json
@dataclass
class ListContainersOutput:
    containers: List[container.Container] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Containers' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
