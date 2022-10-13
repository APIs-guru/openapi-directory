from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FeatureSettings:
    split_health_checks: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'splitHealthChecks' }})
    use_container_optimized_os: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useContainerOptimizedOs' }})
    
