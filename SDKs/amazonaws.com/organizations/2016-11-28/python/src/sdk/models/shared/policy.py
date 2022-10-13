from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import policysummary


@dataclass_json
@dataclass
class Policy:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    policy_summary: Optional[policysummary.PolicySummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicySummary' }})
    
