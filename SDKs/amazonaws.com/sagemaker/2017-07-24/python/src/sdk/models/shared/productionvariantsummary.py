from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deployedimage


@dataclass_json
@dataclass
class ProductionVariantSummary:
    current_instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentInstanceCount' }})
    current_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentWeight' }})
    deployed_images: Optional[List[deployedimage.DeployedImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeployedImages' }})
    desired_instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DesiredInstanceCount' }})
    desired_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DesiredWeight' }})
    variant_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VariantName' }})
    
