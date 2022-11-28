from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductViewSummary:
    r"""ProductViewSummary
    Summary information about a product view.
    """
    
    distributor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Distributor') }})
    has_default_path: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasDefaultPath') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Owner') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShortDescription') }})
    support_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportDescription') }})
    support_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportEmail') }})
    support_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportUrl') }})
    type: Optional[ProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
