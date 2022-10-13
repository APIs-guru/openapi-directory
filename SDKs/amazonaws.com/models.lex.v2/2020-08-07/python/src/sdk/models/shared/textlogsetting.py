from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import textlogdestination


@dataclass_json
@dataclass
class TextLogSetting:
    destination: textlogdestination.TextLogDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    
