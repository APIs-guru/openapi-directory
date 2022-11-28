from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Api2ControllersWebAPIMeControllerPreferenceOptions:
    eating_style: Optional[Api2ControllersWebAPIMeControllerEatingStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EatingStyle') }})
    
