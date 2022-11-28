from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddMediaIntentHandlingInvocation:
    method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    params: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    session: Optional[Session] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    
