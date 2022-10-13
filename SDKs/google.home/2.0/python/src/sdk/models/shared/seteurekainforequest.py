from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import optin1
from . import settings1


@dataclass_json
@dataclass
class SetEurekaInfoRequest:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    opt_in: optin1.OptIn1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opt_in' }})
    settings: settings1.Settings1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
