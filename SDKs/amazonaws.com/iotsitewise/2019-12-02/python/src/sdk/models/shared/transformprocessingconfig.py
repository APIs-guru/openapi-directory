from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import computelocation_enum
from . import forwardingconfig


@dataclass_json
@dataclass
class TransformProcessingConfig:
    compute_location: computelocation_enum.ComputeLocationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeLocation' }})
    forwarding_config: Optional[forwardingconfig.ForwardingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwardingConfig' }})
    
