from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeInstanceAccessControlAttributeConfigurationResponse:
    instance_access_control_attribute_configuration: Optional[InstanceAccessControlAttributeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceAccessControlAttributeConfiguration') }})
    status: Optional[InstanceAccessControlAttributeConfigurationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusReason') }})
    
