from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SellerActionsToRelease:
    seller_action_to_release: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerActionToRelease' }})
    
