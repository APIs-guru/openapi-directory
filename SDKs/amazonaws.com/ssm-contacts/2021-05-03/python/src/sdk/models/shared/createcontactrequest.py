from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateContactRequest:
    alias: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alias') }})
    plan: Plan = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Plan') }})
    type: ContactTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    idempotency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
