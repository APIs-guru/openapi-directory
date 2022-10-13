from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import endpointinput
from . import monitoringgroundtruths3input


@dataclass_json
@dataclass
class ModelQualityJobInput:
    endpoint_input: endpointinput.EndpointInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointInput' }})
    ground_truth_s3_input: monitoringgroundtruths3input.MonitoringGroundTruthS3Input = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroundTruthS3Input' }})
    
