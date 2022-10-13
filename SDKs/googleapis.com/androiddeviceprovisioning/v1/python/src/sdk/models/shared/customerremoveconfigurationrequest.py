from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import devicereference


@dataclass_json
@dataclass
class CustomerRemoveConfigurationRequest:
    device: Optional[devicereference.DeviceReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    
