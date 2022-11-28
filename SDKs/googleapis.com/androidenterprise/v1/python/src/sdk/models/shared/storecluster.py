from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StoreCluster:
    r"""StoreCluster
    Definition of a managed Google Play store cluster, a list of products displayed as part of a store page.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[List[LocalizedText]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    order_in_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderInPage') }})
    product_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    
