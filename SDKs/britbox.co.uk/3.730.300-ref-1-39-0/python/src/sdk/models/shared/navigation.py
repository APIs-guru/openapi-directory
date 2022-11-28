from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Navigation:
    header: List[NavEntry] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    account: Optional[NavEntry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    footer: Optional[NavEntry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footer') }})
    mobile: Optional[NavEntry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobile') }})
    
