from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyedappstate


@dataclass_json
@dataclass
class AppState:
    keyed_app_state: Optional[List[keyedappstate.KeyedAppState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyedAppState' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    
