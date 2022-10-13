from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import servicepipeline


@dataclass_json
@dataclass
class CancelServicePipelineDeploymentOutput:
    pipeline: servicepipeline.ServicePipeline = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipeline' }})
    
