from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CarRankRequest:
    listing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listing_ids' }})
    ranking_criteria: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ranking_criteria' }})
    
