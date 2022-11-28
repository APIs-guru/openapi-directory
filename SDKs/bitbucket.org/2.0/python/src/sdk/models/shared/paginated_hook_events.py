from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PaginatedHookEvents:
    r"""PaginatedHookEvents
    A paginated list of webhook types available to subscribe on.
    """
    
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pagelen: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagelen') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    values: Optional[List[HookEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
