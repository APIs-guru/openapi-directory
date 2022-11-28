from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DestinationConfig:
    r"""DestinationConfig
    A configuration object that specifies the destination of an event after Lambda processes it.
    """
    
    on_failure: Optional[OnFailure] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnFailure') }})
    on_success: Optional[OnSuccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnSuccess') }})
    
