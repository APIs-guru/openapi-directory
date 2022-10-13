from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import vulnerability
from . import firmwareinfo
from . import firmwareinfo


@dataclass_json
@dataclass
class DeviceInfo:
    cve_list: Optional[List[vulnerability.Vulnerability]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cve_list' }})
    device_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_type' }})
    firmware_info: Optional[firmwareinfo.FirmwareInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firmware_info' }})
    firmware_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firmware_version' }})
    is_discontinued: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_discontinued' }})
    latest_firmware_info: Optional[firmwareinfo.FirmwareInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest_firmware_info' }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model_name' }})
    
