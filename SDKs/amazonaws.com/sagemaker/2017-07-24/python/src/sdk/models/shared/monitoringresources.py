from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonitoringResources:
    r"""MonitoringResources
    Identifies the resources to deploy for a monitoring job.
    """
    
    cluster_config: MonitoringClusterConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterConfig') }})
    
