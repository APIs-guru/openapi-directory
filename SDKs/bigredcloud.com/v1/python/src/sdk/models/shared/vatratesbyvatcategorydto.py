from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import vatratedto


@dataclass_json
@dataclass
class VatRatesByVatCategoryDto:
    vat_category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatCategoryId' }})
    vat_rates: Optional[List[vatratedto.VatRateDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatRates' }})
    
