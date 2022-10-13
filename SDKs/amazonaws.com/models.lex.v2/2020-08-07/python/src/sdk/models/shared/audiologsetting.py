from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import audiologdestination


@dataclass_json
@dataclass
class AudioLogSetting:
    destination: audiologdestination.AudioLogDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    
