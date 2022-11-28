from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DesiredWeightAndCapacity:
    r"""DesiredWeightAndCapacity
    Specifies weight and capacity values for a production variant.
    """
    
    variant_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VariantName') }})
    desired_instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredInstanceCount') }})
    desired_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredWeight') }})
    
