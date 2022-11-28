from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class AddAccountNewAccountCurrencyEnum(str, Enum):
    EUR = "EUR"
    GBP = "GBP"


@dataclass_json
@dataclass
class AddAccountNewAccount:
    accept_fees_and_charges: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceptFeesAndCharges') }})
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    currency: Optional[AddAccountNewAccountCurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    

@dataclass
class AddAccountRequest:
    request: AddAccountNewAccount = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddAccountResponse:
    content_type: str = field()
    status_code: int = field()
    oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items: Optional[shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems] = field(default=None)
    
