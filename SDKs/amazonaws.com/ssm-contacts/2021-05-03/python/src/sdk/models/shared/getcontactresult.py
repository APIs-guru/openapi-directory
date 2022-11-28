from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetContactResult:
    alias: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alias') }})
    contact_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactArn') }})
    plan: Plan = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Plan') }})
    type: ContactTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    
