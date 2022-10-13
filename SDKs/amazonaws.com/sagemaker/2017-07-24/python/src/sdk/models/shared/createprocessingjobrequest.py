from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appspecification
from . import experimentconfig
from . import networkconfig
from . import processinginput
from . import processingoutputconfig
from . import processingresources
from . import processingstoppingcondition
from . import tag


@dataclass_json
@dataclass
class CreateProcessingJobRequest:
    app_specification: appspecification.AppSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppSpecification' }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    experiment_config: Optional[experimentconfig.ExperimentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExperimentConfig' }})
    network_config: Optional[networkconfig.NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkConfig' }})
    processing_inputs: Optional[List[processinginput.ProcessingInput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingInputs' }})
    processing_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingJobName' }})
    processing_output_config: Optional[processingoutputconfig.ProcessingOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingOutputConfig' }})
    processing_resources: processingresources.ProcessingResources = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingResources' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    stopping_condition: Optional[processingstoppingcondition.ProcessingStoppingCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppingCondition' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
