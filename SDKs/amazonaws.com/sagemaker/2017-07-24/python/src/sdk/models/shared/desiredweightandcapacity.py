from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DesiredWeightAndCapacity:
    desired_instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DesiredInstanceCount' }})
    desired_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DesiredWeight' }})
    variant_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VariantName' }})
    
