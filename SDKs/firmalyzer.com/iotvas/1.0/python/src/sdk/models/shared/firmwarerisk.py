from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import risksummary
from . import vulnerablecomponent


@dataclass_json
@dataclass
class FirmwareRisk:
    risk_summary: Optional[risksummary.RiskSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'risk_summary' }})
    vulnerable_components: Optional[List[vulnerablecomponent.VulnerableComponent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vulnerable_components' }})
    
