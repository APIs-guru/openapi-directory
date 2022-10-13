from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import edgeoutputconfig


@dataclass_json
@dataclass
class UpdateDeviceFleetRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    device_fleet_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceFleetName' }})
    enable_iot_role_alias: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableIotRoleAlias' }})
    output_config: edgeoutputconfig.EdgeOutputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputConfig' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    
