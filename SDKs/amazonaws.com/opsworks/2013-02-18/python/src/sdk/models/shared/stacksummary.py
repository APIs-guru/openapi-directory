from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StackSummary:
    r"""StackSummary
    Summarizes the number of layers, instances, and apps in a stack.
    """
    
    apps_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppsCount') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    instances_count: Optional[InstancesCount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancesCount') }})
    layers_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayersCount') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    stack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    
