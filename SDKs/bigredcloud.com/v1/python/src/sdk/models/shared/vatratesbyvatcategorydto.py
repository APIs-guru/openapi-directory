from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VatRatesByVatCategoryDto:
    vat_category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vatCategoryId') }})
    vat_rates: Optional[List[VatRateDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vatRates') }})
    
