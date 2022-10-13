from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import monitoringclusterconfig


@dataclass_json
@dataclass
class MonitoringResources:
    cluster_config: monitoringclusterconfig.MonitoringClusterConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterConfig' }})
    
