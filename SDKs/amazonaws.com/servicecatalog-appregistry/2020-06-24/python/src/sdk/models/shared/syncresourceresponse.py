from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SyncResourceResponse:
    action_taken: Optional[SyncActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionTaken') }})
    application_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationArn') }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArn') }})
    
