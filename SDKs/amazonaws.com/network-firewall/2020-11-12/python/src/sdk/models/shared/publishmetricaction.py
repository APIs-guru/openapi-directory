from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import dimension


@dataclass_json
@dataclass
class PublishMetricAction:
    dimensions: List[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimensions' }})
    
