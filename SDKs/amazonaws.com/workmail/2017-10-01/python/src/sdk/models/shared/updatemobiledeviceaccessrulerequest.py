from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateMobileDeviceAccessRuleRequest:
    effect: MobileDeviceAccessRuleEffectEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Effect') }})
    mobile_device_access_rule_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MobileDeviceAccessRuleId') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    organization_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    device_models: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceModels') }})
    device_operating_systems: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceOperatingSystems') }})
    device_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceTypes') }})
    device_user_agents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceUserAgents') }})
    not_device_models: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotDeviceModels') }})
    not_device_operating_systems: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotDeviceOperatingSystems') }})
    not_device_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotDeviceTypes') }})
    not_device_user_agents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotDeviceUserAgents') }})
    
