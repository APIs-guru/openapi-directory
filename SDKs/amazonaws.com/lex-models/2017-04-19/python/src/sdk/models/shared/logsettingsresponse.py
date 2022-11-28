from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LogSettingsResponse:
    r"""LogSettingsResponse
    The settings for conversation logs.
    """
    
    destination: Optional[DestinationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyArn') }})
    log_type: Optional[LogTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logType') }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArn') }})
    resource_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcePrefix') }})
    
