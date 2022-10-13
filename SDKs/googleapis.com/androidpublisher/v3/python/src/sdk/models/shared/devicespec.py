from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceSpec:
    screen_density: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenDensity' }})
    supported_abis: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedAbis' }})
    supported_locales: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedLocales' }})
    
