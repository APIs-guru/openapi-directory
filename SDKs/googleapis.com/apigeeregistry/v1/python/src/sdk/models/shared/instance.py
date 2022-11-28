from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceInput:
    r"""InstanceInput
    An Instance represents the instance resources of the Registry. Currently, only one instance is allowed for each project.
    """
    
    config: Optional[ConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
