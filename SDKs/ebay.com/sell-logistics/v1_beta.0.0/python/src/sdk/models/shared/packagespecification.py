from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dimensions
from . import weight


@dataclass_json
@dataclass
class PackageSpecification:
    dimensions: Optional[dimensions.Dimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    weight: Optional[weight.Weight] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
