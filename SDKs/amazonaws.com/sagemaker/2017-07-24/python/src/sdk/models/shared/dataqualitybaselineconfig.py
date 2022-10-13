from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import monitoringconstraintsresource
from . import monitoringstatisticsresource


@dataclass_json
@dataclass
class DataQualityBaselineConfig:
    baselining_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaseliningJobName' }})
    constraints_resource: Optional[monitoringconstraintsresource.MonitoringConstraintsResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConstraintsResource' }})
    statistics_resource: Optional[monitoringstatisticsresource.MonitoringStatisticsResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatisticsResource' }})
    
