from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Group:
    r"""Group
    Details and metadata for a group.
    """
    
    filter_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterExpression') }})
    group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupARN') }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    insights_configuration: Optional[InsightsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightsConfiguration') }})
    
