from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConvertedRegionPrice:
    r"""ConvertedRegionPrice
    A converted region price.
    """
    
    price: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    tax_amount: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAmount') }})
    
