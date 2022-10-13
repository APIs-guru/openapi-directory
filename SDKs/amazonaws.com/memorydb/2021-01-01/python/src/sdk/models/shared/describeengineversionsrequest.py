from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeEngineVersionsRequest:
    default_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultOnly' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    parameter_group_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroupFamily' }})
    
