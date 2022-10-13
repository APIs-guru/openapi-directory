from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DocumentDimensionsUnitEnum(str, Enum):
    DOCUMENT_DIMENSION_UNIT_UNSPECIFIED = "DOCUMENT_DIMENSION_UNIT_UNSPECIFIED"
    INCH = "INCH"
    CENTIMETER = "CENTIMETER"
    POINT = "POINT"


@dataclass_json
@dataclass
class DocumentDimensions:
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    unit: Optional[DocumentDimensionsUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
