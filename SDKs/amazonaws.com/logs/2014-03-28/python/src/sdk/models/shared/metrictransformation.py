from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import standardunit_enum


@dataclass_json
@dataclass
class MetricTransformation:
    default_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValue' }})
    dimensions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    metric_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    metric_namespace: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricNamespace' }})
    metric_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricValue' }})
    unit: Optional[standardunit_enum.StandardUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    
