from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import mobiledeviceaccessruleeffect_enum


@dataclass_json
@dataclass
class UpdateMobileDeviceAccessRuleRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    device_models: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceModels' }})
    device_operating_systems: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceOperatingSystems' }})
    device_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceTypes' }})
    device_user_agents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceUserAgents' }})
    effect: mobiledeviceaccessruleeffect_enum.MobileDeviceAccessRuleEffectEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Effect' }})
    mobile_device_access_rule_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MobileDeviceAccessRuleId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    not_device_models: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotDeviceModels' }})
    not_device_operating_systems: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotDeviceOperatingSystems' }})
    not_device_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotDeviceTypes' }})
    not_device_user_agents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotDeviceUserAgents' }})
    organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    
