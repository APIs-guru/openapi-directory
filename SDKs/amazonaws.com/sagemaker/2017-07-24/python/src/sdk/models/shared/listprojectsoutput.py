from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import projectsummary


@dataclass_json
@dataclass
class ListProjectsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    project_summary_list: List[projectsummary.ProjectSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectSummaryList' }})
    
