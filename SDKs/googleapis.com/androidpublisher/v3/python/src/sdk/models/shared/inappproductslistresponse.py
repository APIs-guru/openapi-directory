from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inappproduct
from . import pageinfo
from . import tokenpagination


@dataclass_json
@dataclass
class InappproductsListResponse:
    inappproduct: Optional[List[inappproduct.InAppProduct]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inappproduct' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    page_info: Optional[pageinfo.PageInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageInfo' }})
    token_pagination: Optional[tokenpagination.TokenPagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenPagination' }})
    
