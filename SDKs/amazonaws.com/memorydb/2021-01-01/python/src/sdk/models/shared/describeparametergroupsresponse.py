from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parametergroup


@dataclass_json
@dataclass
class DescribeParameterGroupsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    parameter_groups: Optional[List[parametergroup.ParameterGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroups' }})
    
