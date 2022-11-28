from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LaunchConfiguration:
    copy_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyPrivateIp') }})
    copy_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyTags') }})
    ec2_launch_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2LaunchTemplateID') }})
    launch_disposition: Optional[LaunchDispositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchDisposition') }})
    licensing: Optional[Licensing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licensing') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceServerID') }})
    target_instance_type_right_sizing_method: Optional[TargetInstanceTypeRightSizingMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetInstanceTypeRightSizingMethod') }})
    
