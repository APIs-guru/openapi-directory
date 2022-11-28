from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegisterDomain:
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_name') }})
    name_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name_servers') }})
    registrant: Optional[RegistrantInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrant') }})
    
