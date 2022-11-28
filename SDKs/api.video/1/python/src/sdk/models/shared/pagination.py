from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Pagination:
    links: List[PaginationLink] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    current_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPage') }})
    current_page_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPageItems') }})
    items_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemsTotal') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    pages_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagesTotal') }})
    
