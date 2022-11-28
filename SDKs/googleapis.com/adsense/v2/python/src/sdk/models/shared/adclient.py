from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AdClientStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    READY = "READY"
    GETTING_READY = "GETTING_READY"
    REQUIRES_REVIEW = "REQUIRES_REVIEW"


@dataclass_json
@dataclass
class AdClient:
    r"""AdClient
    Representation of an ad client. An ad client represents a user's subscription with a specific AdSense product.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCode') }})
    reporting_dimension_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportingDimensionId') }})
    state: Optional[AdClientStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
