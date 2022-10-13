from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import robotapplicationsummary


@dataclass_json
@dataclass
class ListRobotApplicationsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    robot_application_summaries: Optional[List[robotapplicationsummary.RobotApplicationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'robotApplicationSummaries' }})
    
