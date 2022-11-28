from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InputConfig:
    r"""InputConfig
    Contains information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.
    """
    
    data_input_config: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataInputConfig') }})
    framework: FrameworkEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Framework') }})
    s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    framework_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FrameworkVersion') }})
    
