from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import marketplacedeal


@dataclass_json
@dataclass
class EditAllOrderDealsResponse:
    deals: Optional[List[marketplacedeal.MarketplaceDeal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deals' }})
    order_revision_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderRevisionNumber' }})
    
