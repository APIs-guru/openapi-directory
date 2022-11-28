from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PosBankAccountAchDetails:
    r"""PosBankAccountAchDetails
    ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.
    """
    
    account_number_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_number_suffix') }})
    account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_type') }})
    routing_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routing_number') }})
    

@dataclass_json
@dataclass
class PosBankAccount:
    r"""PosBankAccount
    Card details for this payment. This field is currently not available. Reach out to our team for more info.
    """
    
    account_ownership_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_ownership_type') }})
    ach_details: Optional[PosBankAccountAchDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ach_details') }})
    bank_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank_name') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    statement_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statement_description') }})
    transfer_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer_type') }})
    
