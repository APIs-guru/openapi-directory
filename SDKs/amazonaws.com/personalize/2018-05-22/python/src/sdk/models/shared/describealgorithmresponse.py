from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import algorithm


@dataclass_json
@dataclass
class DescribeAlgorithmResponse:
    algorithm: Optional[algorithm.Algorithm] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    
