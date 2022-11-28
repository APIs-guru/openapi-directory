from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextLogSetting:
    r"""TextLogSetting
    Defines settings to enable text conversation logs.
    """
    
    destination: TextLogDestination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
