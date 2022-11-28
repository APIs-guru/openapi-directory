from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Buyer:
    r"""Buyer
    This type contains information about the order's buyer.
    """
    
    tax_address: Optional[TaxAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAddress') }})
    tax_identifier: Optional[TaxIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxIdentifier') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
