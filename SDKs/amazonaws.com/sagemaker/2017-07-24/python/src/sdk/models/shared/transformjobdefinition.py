from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransformJobDefinition:
    r"""TransformJobDefinition
    Defines the input needed to run a transform job using the inference specification specified in the algorithm.
    """
    
    transform_input: TransformInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformInput') }})
    transform_output: TransformOutput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformOutput') }})
    transform_resources: TransformResources = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformResources') }})
    batch_strategy: Optional[BatchStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchStrategy') }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    max_concurrent_transforms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxConcurrentTransforms') }})
    max_payload_in_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxPayloadInMB') }})
    
