from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchProvisionedProductsOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    provisioned_products: Optional[List[ProvisionedProductAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProducts') }})
    total_results_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalResultsCount') }})
    
