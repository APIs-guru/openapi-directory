from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BasicModelStats:
    average: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'average' }})
    median: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'median' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    p_variance: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pVariance' }})
    std_dev: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stdDev' }})
    
