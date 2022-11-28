from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageFile:
    r"""ImageFile
    Contains an image file.
    """
    
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    type: ImageFileTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
