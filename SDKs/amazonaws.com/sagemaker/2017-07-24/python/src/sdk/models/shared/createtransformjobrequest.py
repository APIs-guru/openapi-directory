from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import batchstrategy_enum
from . import dataprocessing
from . import experimentconfig
from . import modelclientconfig
from . import tag
from . import transforminput
from . import transformoutput
from . import transformresources


@dataclass_json
@dataclass
class CreateTransformJobRequest:
    batch_strategy: Optional[batchstrategy_enum.BatchStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchStrategy' }})
    data_processing: Optional[dataprocessing.DataProcessing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataProcessing' }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    experiment_config: Optional[experimentconfig.ExperimentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExperimentConfig' }})
    max_concurrent_transforms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrentTransforms' }})
    max_payload_in_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxPayloadInMB' }})
    model_client_config: Optional[modelclientconfig.ModelClientConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelClientConfig' }})
    model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    transform_input: transforminput.TransformInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformInput' }})
    transform_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformJobName' }})
    transform_output: transformoutput.TransformOutput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformOutput' }})
    transform_resources: transformresources.TransformResources = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformResources' }})
    
