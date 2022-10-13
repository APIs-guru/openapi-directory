from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import computelocation_enum


@dataclass_json
@dataclass
class MetricProcessingConfig:
    compute_location: computelocation_enum.ComputeLocationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeLocation' }})
    
