from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProcessingResources:
    r"""ProcessingResources
    Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
    """
    
    cluster_config: ProcessingClusterConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterConfig') }})
    
