from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import previousassetpurchase


@dataclass_json
@dataclass
class PreviousAssetPurchases:
    previous_purchases: Optional[List[previousassetpurchase.PreviousAssetPurchase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_purchases' }})
    result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result_count' }})
    
