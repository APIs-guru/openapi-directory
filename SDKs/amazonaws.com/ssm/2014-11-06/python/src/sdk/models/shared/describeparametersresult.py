from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parametermetadata


@dataclass_json
@dataclass
class DescribeParametersResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    parameters: Optional[List[parametermetadata.ParameterMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    
