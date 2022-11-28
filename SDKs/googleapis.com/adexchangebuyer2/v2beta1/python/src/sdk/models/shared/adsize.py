from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AdSizeSizeTypeEnum(str, Enum):
    SIZE_TYPE_UNSPECIFIED = "SIZE_TYPE_UNSPECIFIED"
    PIXEL = "PIXEL"
    INTERSTITIAL = "INTERSTITIAL"
    NATIVE = "NATIVE"
    FLUID = "FLUID"


@dataclass_json
@dataclass
class AdSize:
    r"""AdSize
    Represents size of a single ad slot, or a creative.
    """
    
    height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    size_type: Optional[AdSizeSizeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeType') }})
    width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
