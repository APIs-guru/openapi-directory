from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LaunchProfileMembership:
    identity_store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityStoreId') }})
    persona: Optional[LaunchProfilePersonaEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persona') }})
    principal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalId') }})
    
