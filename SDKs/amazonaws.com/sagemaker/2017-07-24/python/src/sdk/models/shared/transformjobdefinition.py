from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import batchstrategy_enum
from . import transforminput
from . import transformoutput
from . import transformresources


@dataclass_json
@dataclass
class TransformJobDefinition:
    batch_strategy: Optional[batchstrategy_enum.BatchStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchStrategy' }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    max_concurrent_transforms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrentTransforms' }})
    max_payload_in_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxPayloadInMB' }})
    transform_input: transforminput.TransformInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformInput' }})
    transform_output: transformoutput.TransformOutput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformOutput' }})
    transform_resources: transformresources.TransformResources = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformResources' }})
    
