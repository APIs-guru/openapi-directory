from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SsmValidationParameters:
    r"""SsmValidationParameters
    Contains validation parameters.
    """
    
    command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    execution_timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionTimeoutSeconds') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    output_s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputS3BucketName') }})
    script_type: Optional[ScriptTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptType') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
