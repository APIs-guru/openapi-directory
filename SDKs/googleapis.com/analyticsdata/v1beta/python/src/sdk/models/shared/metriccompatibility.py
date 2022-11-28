from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MetricCompatibilityCompatibilityEnum(str, Enum):
    COMPATIBILITY_UNSPECIFIED = "COMPATIBILITY_UNSPECIFIED"
    COMPATIBLE = "COMPATIBLE"
    INCOMPATIBLE = "INCOMPATIBLE"


@dataclass_json
@dataclass
class MetricCompatibility:
    r"""MetricCompatibility
    The compatibility for a single metric.
    """
    
    compatibility: Optional[MetricCompatibilityCompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibility') }})
    metric_metadata: Optional[MetricMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricMetadata') }})
    
