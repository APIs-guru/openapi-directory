from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DimensionValueContribution:
    contribution_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContributionScore' }})
    dimension_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DimensionValue' }})
    
