from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum(str, Enum):
    EUR = "EUR"
    GBP = "GBP"


@dataclass_json
@dataclass
class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCurrency:
    code: Optional[OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    
class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum(str, Enum):
    LIVE = "LIVE"
    MIGRATED = "MIGRATED"


@dataclass_json
@dataclass
class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems:
    balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    cbic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cbic' }})
    ccan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ccan' }})
    ciban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ciban' }})
    cnsc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cnsc' }})
    colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colour' }})
    currency: Optional[OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCurrency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    default_account: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAccount' }})
    direct_debits_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directDebitsAllowed' }})
    ican: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ican' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
