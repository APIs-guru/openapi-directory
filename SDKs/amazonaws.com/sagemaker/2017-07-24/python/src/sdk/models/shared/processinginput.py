from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProcessingInput:
    r"""ProcessingInput
    The inputs for a processing job. The processing input must specify exactly one of either <code>S3Input</code> or <code>DatasetDefinition</code> types.
    """
    
    input_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputName') }})
    app_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppManaged') }})
    dataset_definition: Optional[DatasetDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetDefinition') }})
    s3_input: Optional[ProcessingS3Input] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Input') }})
    
