from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import metricmetadata

class MetricCompatibilityCompatibilityEnum(str, Enum):
    COMPATIBILITY_UNSPECIFIED = "COMPATIBILITY_UNSPECIFIED"
    COMPATIBLE = "COMPATIBLE"
    INCOMPATIBLE = "INCOMPATIBLE"


@dataclass_json
@dataclass
class MetricCompatibility:
    compatibility: Optional[MetricCompatibilityCompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibility' }})
    metric_metadata: Optional[metricmetadata.MetricMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricMetadata' }})
    
