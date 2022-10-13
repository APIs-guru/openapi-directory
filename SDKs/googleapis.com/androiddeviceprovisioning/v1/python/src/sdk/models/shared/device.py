from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deviceclaim
from . import deviceidentifier
from . import devicemetadata


@dataclass_json
@dataclass
class Device:
    claims: Optional[List[deviceclaim.DeviceClaim]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claims' }})
    configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    device_identifier: Optional[deviceidentifier.DeviceIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceIdentifier' }})
    device_metadata: Optional[devicemetadata.DeviceMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceMetadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
