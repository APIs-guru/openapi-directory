from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeProjectVersionsRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    project_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectArn' }})
    version_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionNames' }})
    
