from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import desiredweightandcapacity


@dataclass_json
@dataclass
class UpdateEndpointWeightsAndCapacitiesInput:
    desired_weights_and_capacities: List[desiredweightandcapacity.DesiredWeightAndCapacity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DesiredWeightsAndCapacities' }})
    endpoint_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointName' }})
    
