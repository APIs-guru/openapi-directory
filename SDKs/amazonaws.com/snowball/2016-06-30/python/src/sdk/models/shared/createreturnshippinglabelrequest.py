from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateReturnShippingLabelRequest:
    job_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    shipping_option: Optional[ShippingOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingOption') }})
    
