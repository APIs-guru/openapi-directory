from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListVendorCustomersResponse:
    r"""ListVendorCustomersResponse
    Response message to list customers of the vendor.
    """
    
    customers: Optional[List[Company]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customers') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
