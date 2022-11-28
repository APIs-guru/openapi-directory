from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsS3BucketNotificationConfigurationS3KeyFilterRule:
    r"""AwsS3BucketNotificationConfigurationS3KeyFilterRule
    Details for a filter rule.
    """
    
    name: Optional[AwsS3BucketNotificationConfigurationS3KeyFilterRuleNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
