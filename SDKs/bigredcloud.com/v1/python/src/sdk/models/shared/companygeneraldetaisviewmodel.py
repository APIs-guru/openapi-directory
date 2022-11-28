from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CompanyGeneralDetaisViewModel:
    company_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyAddresses') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    currency_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyDescription') }})
    currency_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyId') }})
    currentcy_symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentcySymbol') }})
    emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    faxes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faxes') }})
    phones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phones') }})
    region_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionDescription') }})
    region_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionId') }})
    vat_reg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vatReg') }})
    
