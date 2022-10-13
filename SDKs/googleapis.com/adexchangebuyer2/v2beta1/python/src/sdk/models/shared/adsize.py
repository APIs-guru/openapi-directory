from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AdSizeSizeTypeEnum(str, Enum):
    SIZE_TYPE_UNSPECIFIED = "SIZE_TYPE_UNSPECIFIED"
    PIXEL = "PIXEL"
    INTERSTITIAL = "INTERSTITIAL"
    NATIVE = "NATIVE"
    FLUID = "FLUID"


@dataclass_json
@dataclass
class AdSize:
    height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    size_type: Optional[AdSizeSizeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeType' }})
    width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
