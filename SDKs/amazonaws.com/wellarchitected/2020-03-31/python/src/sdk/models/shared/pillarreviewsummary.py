from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PillarReviewSummary:
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    pillar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PillarId' }})
    pillar_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PillarName' }})
    risk_counts: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RiskCounts' }})
    
