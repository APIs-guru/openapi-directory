from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CarListingRank:
    ranked_listing: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ranked_listing' }})
    
