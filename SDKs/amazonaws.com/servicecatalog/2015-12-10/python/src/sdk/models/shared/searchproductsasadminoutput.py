from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchProductsAsAdminOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    product_view_details: Optional[List[ProductViewDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductViewDetails') }})
    
