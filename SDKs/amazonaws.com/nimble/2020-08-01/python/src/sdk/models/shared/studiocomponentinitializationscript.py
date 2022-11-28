from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StudioComponentInitializationScript:
    r"""StudioComponentInitializationScript
    Initialization scripts for studio components.
    """
    
    launch_profile_protocol_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchProfileProtocolVersion') }})
    platform: Optional[LaunchProfilePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    run_context: Optional[StudioComponentInitializationScriptRunContextEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runContext') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    
