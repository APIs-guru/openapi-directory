from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetSolutionMetricsResponse:
    metrics: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    solution_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutionVersionArn' }})
    
