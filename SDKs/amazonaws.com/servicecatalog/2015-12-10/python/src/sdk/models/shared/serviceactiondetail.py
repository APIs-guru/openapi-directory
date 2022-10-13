from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import serviceactionsummary


@dataclass_json
@dataclass
class ServiceActionDetail:
    definition: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Definition' }})
    service_action_summary: Optional[serviceactionsummary.ServiceActionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceActionSummary' }})
    
