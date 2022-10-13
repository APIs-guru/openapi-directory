from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AdClientStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    READY = "READY"
    GETTING_READY = "GETTING_READY"
    REQUIRES_REVIEW = "REQUIRES_REVIEW"


@dataclass_json
@dataclass
class AdClient:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCode' }})
    reporting_dimension_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportingDimensionId' }})
    state: Optional[AdClientStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
