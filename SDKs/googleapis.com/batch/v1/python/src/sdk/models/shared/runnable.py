from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Runnable:
    r"""Runnable
    Runnable describes instructions for executing a specific script or container as part of a Task.
    """
    
    always_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alwaysRun') }})
    background: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('background') }})
    barrier: Optional[Barrier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barrier') }})
    container: Optional[Container] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    environment: Optional[Environment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    ignore_exit_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreExitStatus') }})
    script: Optional[Script] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
