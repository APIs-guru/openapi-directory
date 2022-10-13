from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsClusterDefaultCapacityProviderStrategyDetails:
    base: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Base' }})
    capacity_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CapacityProvider' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Weight' }})
    
