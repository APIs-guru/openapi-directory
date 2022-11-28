from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BankAccountDto:
    ac_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acCode') }})
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    address: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    bank_feed_source: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankFeedSource') }})
    business_identifier_codes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessIdentifierCodes') }})
    category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    creditor_scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorScheme') }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    international_bank_account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internationalBankAccountNumber') }})
    is_default_bank: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDefaultBank') }})
    last_chq: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastChq') }})
    nominal_ac_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nominalAcCode') }})
    o_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oBalance') }})
    sort_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortCode') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
