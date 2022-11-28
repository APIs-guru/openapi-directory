from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductTranDto:
    amount_net: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountNet') }})
    ac_entries: Optional[List[AcEntryDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acEntries') }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCode') }})
    product_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    tran_notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tranNotes') }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitPrice') }})
    vat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vat') }})
    vat_analysis_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vatAnalysisTypeId') }})
    vat_rate_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vatRateId') }})
    
