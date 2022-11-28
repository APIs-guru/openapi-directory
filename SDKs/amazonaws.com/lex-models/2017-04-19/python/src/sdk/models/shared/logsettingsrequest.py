from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LogSettingsRequest:
    r"""LogSettingsRequest
    Settings used to configure delivery mode and destination for conversation logs.
    """
    
    destination: DestinationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    log_type: LogTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logType') }})
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArn') }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyArn') }})
    
