from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListProductsResponse:
    r"""ListProductsResponse
    Response message for listing products visible to the buyer.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    products: Optional[List[Product]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    
