from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetAccountsAccountsAccountCurrencyCodeEnum(str, Enum):
    EUR = "EUR"
    GBP = "GBP"


@dataclass_json
@dataclass
class GetAccountsAccountsAccountCurrency:
    code: Optional[GetAccountsAccountsAccountCurrencyCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
class GetAccountsAccountsAccountStatusEnum(str, Enum):
    LIVE = "LIVE"
    MIGRATED = "MIGRATED"


@dataclass_json
@dataclass
class GetAccountsAccountsAccount:
    balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    cbic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cbic') }})
    ccan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ccan') }})
    ciban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ciban') }})
    cnsc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cnsc') }})
    colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colour') }})
    currency: Optional[GetAccountsAccountsAccountCurrency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    default_account: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAccount') }})
    direct_debits_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directDebitsAllowed') }})
    ican: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ican') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[GetAccountsAccountsAccountStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetAccountsAccounts:
    accounts: Optional[List[GetAccountsAccountsAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    

@dataclass
class GetAccountsResponse:
    content_type: str = field()
    status_code: int = field()
    accounts: Optional[GetAccountsAccounts] = field(default=None)
    
