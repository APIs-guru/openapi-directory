from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import shippingoption_enum


@dataclass_json
@dataclass
class CreateReturnShippingLabelRequest:
    job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    shipping_option: Optional[shippingoption_enum.ShippingOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingOption' }})
    
