from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import systeminstancesummary


@dataclass_json
@dataclass
class CreateSystemInstanceResponse:
    summary: Optional[systeminstancesummary.SystemInstanceSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
