from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import insight


@dataclass_json
@dataclass
class GetInsightResult:
    insight: Optional[insight.Insight] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Insight' }})
    
