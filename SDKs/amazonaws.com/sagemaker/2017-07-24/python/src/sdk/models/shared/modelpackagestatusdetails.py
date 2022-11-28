from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModelPackageStatusDetails:
    r"""ModelPackageStatusDetails
    Specifies the validation and image scan statuses of the model package.
    """
    
    validation_statuses: List[ModelPackageStatusItem] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationStatuses') }})
    image_scan_statuses: Optional[List[ModelPackageStatusItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageScanStatuses') }})
    
