from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AlgorithmValidationSpecification:
    r"""AlgorithmValidationSpecification
    Specifies configurations for one or more training jobs that Amazon SageMaker runs to test the algorithm.
    """
    
    validation_profiles: List[AlgorithmValidationProfile] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationProfiles') }})
    validation_role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationRole') }})
    
