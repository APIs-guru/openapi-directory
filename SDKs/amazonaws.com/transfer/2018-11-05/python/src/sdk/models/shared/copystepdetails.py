from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CopyStepDetails:
    r"""CopyStepDetails
    Each step type has its own <code>StepDetails</code> structure.
    """
    
    destination_file_location: Optional[InputFileLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationFileLocation') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    overwrite_existing: Optional[OverwriteExistingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverwriteExisting') }})
    
