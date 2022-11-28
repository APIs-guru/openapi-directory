from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BankAccountAccountTypeEnum(str, Enum):
    BANK_ACCOUNT = "bank_account"
    CREDIT_CARD = "credit_card"
    OTHER = "other"


@dataclass_json
@dataclass
class BankAccount:
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_name') }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_number') }})
    account_type: Optional[BankAccountAccountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_type') }})
    bank_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank_code') }})
    bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bic') }})
    branch_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch_identifier') }})
    bsb_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bsb_number') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iban') }})
    
