from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import applicationsummary


@dataclass_json
@dataclass
class ListApplicationsResponse:
    application_summaries: List[applicationsummary.ApplicationSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationSummaries' }})
    has_more_applications: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasMoreApplications' }})
    
