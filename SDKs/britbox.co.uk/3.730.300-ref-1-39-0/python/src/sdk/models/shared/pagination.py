from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import paginationauth
from . import paginationoptions


@dataclass_json
@dataclass
class Pagination:
    authorization: Optional[paginationauth.PaginationAuth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorization' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    options: Optional[paginationoptions.PaginationOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    page: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
