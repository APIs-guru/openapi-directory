from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import devicemetadata


@dataclass_json
@dataclass
class UpdateDeviceMetadataRequest:
    device_metadata: Optional[devicemetadata.DeviceMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceMetadata' }})
    
