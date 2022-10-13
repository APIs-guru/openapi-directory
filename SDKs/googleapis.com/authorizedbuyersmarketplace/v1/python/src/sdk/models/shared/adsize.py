from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AdSizeTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    PIXEL = "PIXEL"
    INTERSTITIAL = "INTERSTITIAL"
    NATIVE = "NATIVE"
    FLUID = "FLUID"


@dataclass_json
@dataclass
class AdSize:
    height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    type: Optional[AdSizeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
