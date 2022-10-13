from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import devicestatus_enum


@dataclass_json
@dataclass
class DescribeDeviceResponse:
    first_accessed_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstAccessedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_accessed_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastAccessedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Manufacturer' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Model' }})
    operating_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperatingSystem' }})
    operating_system_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperatingSystemVersion' }})
    patch_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatchLevel' }})
    status: Optional[devicestatus_enum.DeviceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
