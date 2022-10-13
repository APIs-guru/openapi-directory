from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import anomalygroup


@dataclass_json
@dataclass
class GetAnomalyGroupResponse:
    anomaly_group: Optional[anomalygroup.AnomalyGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyGroup' }})
    
