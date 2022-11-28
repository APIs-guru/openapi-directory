from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutSubscriptionFilterRequest:
    destination_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationArn') }})
    filter_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterName') }})
    filter_pattern: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterPattern') }})
    log_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    distribution: Optional[DistributionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distribution') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
