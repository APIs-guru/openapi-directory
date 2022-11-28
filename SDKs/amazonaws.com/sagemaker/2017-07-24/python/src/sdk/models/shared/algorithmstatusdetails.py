from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AlgorithmStatusDetails:
    r"""AlgorithmStatusDetails
    Specifies the validation and image scan statuses of the algorithm.
    """
    
    image_scan_statuses: Optional[List[AlgorithmStatusItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageScanStatuses') }})
    validation_statuses: Optional[List[AlgorithmStatusItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationStatuses') }})
    
