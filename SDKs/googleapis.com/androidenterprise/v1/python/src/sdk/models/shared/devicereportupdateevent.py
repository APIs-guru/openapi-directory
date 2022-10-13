from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import devicereport


@dataclass_json
@dataclass
class DeviceReportUpdateEvent:
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    report: Optional[devicereport.DeviceReport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
