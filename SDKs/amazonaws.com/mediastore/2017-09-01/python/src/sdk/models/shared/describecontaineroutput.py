from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import container


@dataclass_json
@dataclass
class DescribeContainerOutput:
    container: Optional[container.Container] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Container' }})
    
