from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import monitoringconstraintsresource


@dataclass_json
@dataclass
class ModelQualityBaselineConfig:
    baselining_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaseliningJobName' }})
    constraints_resource: Optional[monitoringconstraintsresource.MonitoringConstraintsResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConstraintsResource' }})
    
