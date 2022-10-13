from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import projectdescription


@dataclass_json
@dataclass
class DescribeProjectsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    project_descriptions: Optional[List[projectdescription.ProjectDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectDescriptions' }})
    
