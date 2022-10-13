from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RolloutPercentageItemModel:
    percentage: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
