from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nfsondeviceserviceconfiguration


@dataclass_json
@dataclass
class OnDeviceServiceConfiguration:
    nfs_on_device_service: Optional[nfsondeviceserviceconfiguration.NfsOnDeviceServiceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NFSOnDeviceService' }})
    
