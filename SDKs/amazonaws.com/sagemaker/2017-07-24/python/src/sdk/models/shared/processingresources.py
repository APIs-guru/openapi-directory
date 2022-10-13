from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import processingclusterconfig


@dataclass_json
@dataclass
class ProcessingResources:
    cluster_config: processingclusterconfig.ProcessingClusterConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterConfig' }})
    
