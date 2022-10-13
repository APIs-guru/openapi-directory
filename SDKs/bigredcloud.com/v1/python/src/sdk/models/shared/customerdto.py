from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eftbankdto
from . import owneropeningbalanceinperiodsdto
from . import owneropeningbalancedto


@dataclass_json
@dataclass
class CustomerDto:
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountName' }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNumber' }})
    address: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    auth_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authCode' }})
    bank: Optional[eftbankdto.EftBankDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank' }})
    business_identifier_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessIdentifierCode' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact' }})
    delivery: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delivery' }})
    e_ft_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eFTReference' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fax' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    international_bank_account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internationalBankAccountNumber' }})
    ledger_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ledgerBalance' }})
    mobile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobile' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    opening_balance: Optional[owneropeningbalanceinperiodsdto.OwnerOpeningBalanceInPeriodsDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openingBalance' }})
    opening_balances: Optional[List[owneropeningbalancedto.OwnerOpeningBalanceDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openingBalances' }})
    our_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ourCode' }})
    owner_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerTypeId' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    vat_analysis_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatAnalysisTypeId' }})
    vat_reg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatReg' }})
    vat_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatType' }})
    
