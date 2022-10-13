from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import metricssource


@dataclass_json
@dataclass
class Explainability:
    report: Optional[metricssource.MetricsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Report' }})
    
