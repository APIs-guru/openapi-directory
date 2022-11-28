from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateAlgorithmInput:
    algorithm_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmName') }})
    training_specification: TrainingSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingSpecification') }})
    algorithm_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmDescription') }})
    certify_for_marketplace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertifyForMarketplace') }})
    inference_specification: Optional[InferenceSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSpecification') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    validation_specification: Optional[AlgorithmValidationSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationSpecification') }})
    
