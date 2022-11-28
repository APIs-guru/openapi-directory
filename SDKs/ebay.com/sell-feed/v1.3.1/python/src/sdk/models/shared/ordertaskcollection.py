from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderTaskCollection:
    r"""OrderTaskCollection
    The type that defines the fields for a paginated result set of orders. The response consists of 0 or more sequenced pages where each page has 0 or more items.
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    tasks: Optional[List[OrderTask]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
