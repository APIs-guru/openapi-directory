from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StatusEntity:
    r"""StatusEntity
    Test webhook.
    """
    
    clickwrap_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickwrap_body') }})
    clickwrap_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickwrap_id') }})
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[AutoEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    errors: Optional[ErrorsEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
