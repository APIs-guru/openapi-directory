from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import recommendation


@dataclass_json
@dataclass
class Remediation:
    recommendation: Optional[recommendation.Recommendation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Recommendation' }})
    
