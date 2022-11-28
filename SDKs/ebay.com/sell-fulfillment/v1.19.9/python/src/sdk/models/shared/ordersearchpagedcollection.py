from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderSearchPagedCollection:
    r"""OrderSearchPagedCollection
    This type contains the specifications for the collection of orders that match the search or filter criteria of a getOrders call. The collection is grouped into a result set, and based on the query parameters that are set (including the limit and offset parameters), the result set may included multiple pages, but only one page of the result set can be viewed at a time.
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    orders: Optional[List[Order]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    warnings: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
