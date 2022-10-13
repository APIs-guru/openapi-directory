from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import localizedtext


@dataclass_json
@dataclass
class StoreCluster:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[List[localizedtext.LocalizedText]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    order_in_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderInPage' }})
    product_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    
