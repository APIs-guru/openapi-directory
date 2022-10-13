from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import projectversiondescription


@dataclass_json
@dataclass
class DescribeProjectVersionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    project_version_descriptions: Optional[List[projectversiondescription.ProjectVersionDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectVersionDescriptions' }})
    
