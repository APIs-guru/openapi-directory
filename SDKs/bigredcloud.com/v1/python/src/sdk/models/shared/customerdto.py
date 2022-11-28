from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomerDto:
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    address: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    auth_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authCode') }})
    bank: Optional[EftBankDto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank') }})
    business_identifier_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessIdentifierCode') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    delivery: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery') }})
    e_ft_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eFTReference') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fax') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    international_bank_account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internationalBankAccountNumber') }})
    ledger_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ledgerBalance') }})
    mobile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobile') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    opening_balance: Optional[OwnerOpeningBalanceInPeriodsDto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openingBalance') }})
    opening_balances: Optional[List[OwnerOpeningBalanceDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openingBalances') }})
    our_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ourCode') }})
    owner_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerTypeId') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    vat_analysis_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vatAnalysisTypeId') }})
    vat_reg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vatReg') }})
    vat_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vatType') }})
    
