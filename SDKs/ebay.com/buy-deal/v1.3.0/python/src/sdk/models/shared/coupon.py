from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Coupon:
    r"""Coupon
    The details for the coupon available for the item.
    """
    
    redemption_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redemptionCode') }})
    terms: Optional[Terms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    
