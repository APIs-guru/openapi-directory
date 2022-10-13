from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import connecteddevice
from . import remotesink


@dataclass_json
@dataclass
class Example110:
    audio_mode: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio_mode' }})
    connected_devices: List[connecteddevice.ConnectedDevice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connected_devices' }})
    connecting_devices: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connecting_devices' }})
    discovery_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discovery_enabled' }})
    remote_sink: remotesink.RemoteSink = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remote_sink' }})
    scanning_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scanning_enabled' }})
    
