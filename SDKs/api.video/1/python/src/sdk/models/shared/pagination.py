from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pagination_link


@dataclass_json
@dataclass
class Pagination:
    current_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPage' }})
    current_page_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPageItems' }})
    items_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemsTotal' }})
    links: List[pagination_link.PaginationLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    pages_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagesTotal' }})
    
