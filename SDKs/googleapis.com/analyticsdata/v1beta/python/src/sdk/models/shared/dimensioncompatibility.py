from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dimensionmetadata

class DimensionCompatibilityCompatibilityEnum(str, Enum):
    COMPATIBILITY_UNSPECIFIED = "COMPATIBILITY_UNSPECIFIED"
    COMPATIBLE = "COMPATIBLE"
    INCOMPATIBLE = "INCOMPATIBLE"


@dataclass_json
@dataclass
class DimensionCompatibility:
    compatibility: Optional[DimensionCompatibilityCompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibility' }})
    dimension_metadata: Optional[dimensionmetadata.DimensionMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionMetadata' }})
    
