from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import metricssource
from . import metricssource


@dataclass_json
@dataclass
class ModelDataQuality:
    constraints: Optional[metricssource.MetricsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Constraints' }})
    statistics: Optional[metricssource.MetricsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Statistics' }})
    
