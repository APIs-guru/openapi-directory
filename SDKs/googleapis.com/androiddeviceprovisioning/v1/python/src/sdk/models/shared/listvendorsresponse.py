from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListVendorsResponse:
    r"""ListVendorsResponse
    Response message to list vendors of the partner.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    vendors: Optional[List[Company]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendors') }})
    
