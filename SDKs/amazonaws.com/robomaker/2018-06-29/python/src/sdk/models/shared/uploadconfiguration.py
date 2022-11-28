from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UploadConfiguration:
    r"""UploadConfiguration
    Provides upload configuration information. Files are uploaded from the simulation job to a location you specify. 
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    upload_behavior: UploadBehaviorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadBehavior') }})
    
