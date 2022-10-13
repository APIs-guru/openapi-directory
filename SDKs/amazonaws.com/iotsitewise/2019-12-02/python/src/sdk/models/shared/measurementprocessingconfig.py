from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import forwardingconfig


@dataclass_json
@dataclass
class MeasurementProcessingConfig:
    forwarding_config: forwardingconfig.ForwardingConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwardingConfig' }})
    
