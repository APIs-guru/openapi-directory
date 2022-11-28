from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestingDataResult:
    r"""TestingDataResult
    Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.
    """
    
    input: Optional[TestingData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Input') }})
    output: Optional[TestingData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Output') }})
    validation: Optional[ValidationData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Validation') }})
    
