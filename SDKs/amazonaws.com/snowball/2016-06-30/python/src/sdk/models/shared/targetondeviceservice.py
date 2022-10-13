from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deviceservicename_enum
from . import transferoption_enum


@dataclass_json
@dataclass
class TargetOnDeviceService:
    service_name: Optional[deviceservicename_enum.DeviceServiceNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    transfer_option: Optional[transferoption_enum.TransferOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransferOption' }})
    
