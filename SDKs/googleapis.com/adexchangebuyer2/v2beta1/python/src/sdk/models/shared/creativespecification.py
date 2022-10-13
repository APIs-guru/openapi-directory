from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import adsize
from . import adsize


@dataclass_json
@dataclass
class CreativeSpecification:
    creative_companion_sizes: Optional[List[adsize.AdSize]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeCompanionSizes' }})
    creative_size: Optional[adsize.AdSize] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeSize' }})
    
