from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Tax:
    r"""Tax
    This type contains information about any sales tax applied to a line item.
    """
    
    amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    tax_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxType') }})
    
