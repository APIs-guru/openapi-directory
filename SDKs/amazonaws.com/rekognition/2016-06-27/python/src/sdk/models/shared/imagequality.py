from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImageQuality:
    r"""ImageQuality
    Identifies face image brightness and sharpness. 
    """
    
    brightness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Brightness') }})
    sharpness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sharpness') }})
    
