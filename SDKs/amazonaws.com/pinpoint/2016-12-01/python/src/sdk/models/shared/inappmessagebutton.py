from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import overridebuttonconfiguration
from . import defaultbuttonconfiguration
from . import overridebuttonconfiguration
from . import overridebuttonconfiguration


@dataclass_json
@dataclass
class InAppMessageButton:
    android: Optional[overridebuttonconfiguration.OverrideButtonConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Android' }})
    default_config: Optional[defaultbuttonconfiguration.DefaultButtonConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultConfig' }})
    ios: Optional[overridebuttonconfiguration.OverrideButtonConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IOS' }})
    web: Optional[overridebuttonconfiguration.OverrideButtonConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Web' }})
    
