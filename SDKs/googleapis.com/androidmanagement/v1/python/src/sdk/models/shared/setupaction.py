from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetupAction:
    r"""SetupAction
    An action executed during setup.
    """
    
    description: Optional[UserFacingMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    launch_app: Optional[LaunchAppAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchApp') }})
    title: Optional[UserFacingMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
