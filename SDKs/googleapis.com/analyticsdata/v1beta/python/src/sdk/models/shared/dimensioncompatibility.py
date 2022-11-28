from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DimensionCompatibilityCompatibilityEnum(str, Enum):
    COMPATIBILITY_UNSPECIFIED = "COMPATIBILITY_UNSPECIFIED"
    COMPATIBLE = "COMPATIBLE"
    INCOMPATIBLE = "INCOMPATIBLE"


@dataclass_json
@dataclass
class DimensionCompatibility:
    r"""DimensionCompatibility
    The compatibility for a single dimension.
    """
    
    compatibility: Optional[DimensionCompatibilityCompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibility') }})
    dimension_metadata: Optional[DimensionMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionMetadata') }})
    
