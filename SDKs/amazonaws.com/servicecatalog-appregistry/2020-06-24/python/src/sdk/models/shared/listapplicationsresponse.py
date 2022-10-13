from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationsummary


@dataclass_json
@dataclass
class ListApplicationsResponse:
    applications: Optional[List[applicationsummary.ApplicationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applications' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
