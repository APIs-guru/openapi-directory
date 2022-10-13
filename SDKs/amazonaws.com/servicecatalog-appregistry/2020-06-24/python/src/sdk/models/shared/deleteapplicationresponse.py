from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import applicationsummary


@dataclass_json
@dataclass
class DeleteApplicationResponse:
    application: Optional[applicationsummary.ApplicationSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application' }})
    
