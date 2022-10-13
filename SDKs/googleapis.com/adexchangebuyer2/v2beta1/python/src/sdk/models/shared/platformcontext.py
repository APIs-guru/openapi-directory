from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class PlatformContextPlatformsEnum(str, Enum):
    DESKTOP = "DESKTOP"
    ANDROID = "ANDROID"
    IOS = "IOS"


@dataclass_json
@dataclass
class PlatformContext:
    platforms: Optional[List[PlatformContextPlatformsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platforms' }})
    
