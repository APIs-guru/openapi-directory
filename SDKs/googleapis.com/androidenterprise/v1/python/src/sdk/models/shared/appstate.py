from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppState:
    r"""AppState
    List of states set by the app.
    """
    
    keyed_app_state: Optional[List[KeyedAppState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyedAppState') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    
