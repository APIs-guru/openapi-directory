from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import mobiledeviceaccessruleeffect_enum


@dataclass_json
@dataclass
class MobileDeviceAccessRule:
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateCreated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    device_models: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceModels' }})
    device_operating_systems: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceOperatingSystems' }})
    device_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceTypes' }})
    device_user_agents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceUserAgents' }})
    effect: Optional[mobiledeviceaccessruleeffect_enum.MobileDeviceAccessRuleEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Effect' }})
    mobile_device_access_rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MobileDeviceAccessRuleId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    not_device_models: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotDeviceModels' }})
    not_device_operating_systems: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotDeviceOperatingSystems' }})
    not_device_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotDeviceTypes' }})
    not_device_user_agents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotDeviceUserAgents' }})
    
