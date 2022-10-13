from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetAccounts200ApplicationJSONAccountsCurrencyCodeEnum(str, Enum):
    EUR = "EUR"
    GBP = "GBP"


@dataclass_json
@dataclass
class GetAccounts200ApplicationJSONAccountsCurrencyCurrency:
    code: Optional[GetAccounts200ApplicationJSONAccountsCurrencyCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    
class GetAccounts200ApplicationJSONAccountsStatusEnum(str, Enum):
    LIVE = "LIVE"
    MIGRATED = "MIGRATED"


@dataclass_json
@dataclass
class GetAccounts200ApplicationJSONAccountsAccount:
    balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    cbic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cbic' }})
    ccan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ccan' }})
    ciban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ciban' }})
    cnsc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cnsc' }})
    colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colour' }})
    currency: Optional[GetAccounts200ApplicationJSONAccountsCurrencyCurrency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    default_account: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAccount' }})
    direct_debits_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directDebitsAllowed' }})
    ican: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ican' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[GetAccounts200ApplicationJSONAccountsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetAccounts200ApplicationJSONAccounts:
    accounts: Optional[List[GetAccounts200ApplicationJSONAccountsAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    

@dataclass
class GetAccountsResponse:
    accounts: Optional[GetAccounts200ApplicationJSONAccounts] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
