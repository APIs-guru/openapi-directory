from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import launchpathsummary


@dataclass_json
@dataclass
class ListLaunchPathsOutput:
    launch_path_summaries: Optional[List[launchpathsummary.LaunchPathSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchPathSummaries' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    
