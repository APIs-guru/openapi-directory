from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import lightsaildistribution
from . import operation


@dataclass_json
@dataclass
class CreateDistributionResult:
    distribution: Optional[lightsaildistribution.LightsailDistribution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distribution' }})
    operation: Optional[operation.Operation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    
