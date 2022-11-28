from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModelBiasJobInput:
    r"""ModelBiasJobInput
    Inputs for the model bias job.
    """
    
    endpoint_input: EndpointInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointInput') }})
    ground_truth_s3_input: MonitoringGroundTruthS3Input = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroundTruthS3Input') }})
    
