from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AcceptPageRequest:
    accept_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptCode') }})
    accept_type: AcceptTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptType') }})
    page_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageId') }})
    accept_code_validation: Optional[AcceptCodeValidationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptCodeValidation') }})
    contact_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactChannelId') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Note') }})
    
