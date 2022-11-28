from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomLabel:
    r"""CustomLabel
    A custom label detected in an image by a call to <a>DetectCustomLabels</a>.
    """
    
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    geometry: Optional[Geometry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Geometry') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
