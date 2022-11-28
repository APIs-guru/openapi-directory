from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InappproductsListResponse:
    r"""InappproductsListResponse
    Response listing all in-app products.
    """
    
    inappproduct: Optional[List[InAppProduct]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inappproduct') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    page_info: Optional[PageInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageInfo') }})
    token_pagination: Optional[TokenPagination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenPagination') }})
    
