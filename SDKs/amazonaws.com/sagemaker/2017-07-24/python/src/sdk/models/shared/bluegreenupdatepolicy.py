from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import trafficroutingconfig


@dataclass_json
@dataclass
class BlueGreenUpdatePolicy:
    maximum_execution_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumExecutionTimeoutInSeconds' }})
    termination_wait_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminationWaitInSeconds' }})
    traffic_routing_configuration: trafficroutingconfig.TrafficRoutingConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrafficRoutingConfiguration' }})
    
