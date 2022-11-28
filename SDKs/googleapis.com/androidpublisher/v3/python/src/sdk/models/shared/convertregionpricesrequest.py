from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConvertRegionPricesRequest:
    r"""ConvertRegionPricesRequest
    Request message for ConvertRegionPrices.
    """
    
    price: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
