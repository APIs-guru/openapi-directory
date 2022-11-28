from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ItemDraft:
    r"""ItemDraft
    The type that defines the fields for the listing details.
    """
    
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    charity: Optional[Charity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charity') }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    pricing_summary: Optional[PricingSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingSummary') }})
    product: Optional[Product] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    
