from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DocumentDimensionsUnitEnum(str, Enum):
    DOCUMENT_DIMENSION_UNIT_UNSPECIFIED = "DOCUMENT_DIMENSION_UNIT_UNSPECIFIED"
    INCH = "INCH"
    CENTIMETER = "CENTIMETER"
    POINT = "POINT"


@dataclass_json
@dataclass
class DocumentDimensions:
    r"""DocumentDimensions
    Message that describes dimension of a document.
    """
    
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    unit: Optional[DocumentDimensionsUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
