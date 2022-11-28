from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MessagesResult:
    messages: Optional[List[MessageOverview]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
