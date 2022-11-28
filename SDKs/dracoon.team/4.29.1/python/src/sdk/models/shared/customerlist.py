from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomerList:
    r"""CustomerList
    List of customers
    """
    
    items: List[Customer] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    range: Range = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
