from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BankAccountQueryDto:
    ac_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acCode' }})
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountName' }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNumber' }})
    address: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    bank_feed_source: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bankFeedSource' }})
    business_identifier_codes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessIdentifierCodes' }})
    category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryId' }})
    creditor_scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditorScheme' }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    international_bank_account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internationalBankAccountNumber' }})
    is_default_bank: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefaultBank' }})
    last_chq: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastChq' }})
    nominal_ac_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nominalAcCode' }})
    sort_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortCode' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    
