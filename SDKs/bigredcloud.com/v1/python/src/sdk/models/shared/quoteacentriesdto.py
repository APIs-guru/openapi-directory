from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QuoteAcEntriesDto:
    account_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountCode') }})
    analysis_category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisCategoryId') }})
    company_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyId') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    quote_product_tran_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quoteProductTranId') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
