from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import suppressionlistreason_enum


@dataclass_json
@dataclass
class SuppressionAttributes:
    suppressed_reasons: Optional[List[suppressionlistreason_enum.SuppressionListReasonEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuppressedReasons' }})
    
