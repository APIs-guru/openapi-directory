from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class AddAccountRequestBodyCurrencyEnum(str, Enum):
    EUR = "EUR"
    GBP = "GBP"


@dataclass_json
@dataclass
class AddAccountRequestBodyNewAccount:
    accept_fees_and_charges: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceptFeesAndCharges' }})
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountName' }})
    currency: Optional[AddAccountRequestBodyCurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    

@dataclass
class AddAccountRequest:
    request: AddAccountRequestBodyNewAccount = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddAccountResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items: Optional[shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems] = field(default=None)
    
