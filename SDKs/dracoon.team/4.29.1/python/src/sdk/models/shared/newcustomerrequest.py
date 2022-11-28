from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NewCustomerRequestCustomerContractTypeEnum(str, Enum):
    DEMO = "demo"
    FREE = "free"
    PAY = "pay"


@dataclass_json
@dataclass
class NewCustomerRequest:
    r"""NewCustomerRequest
    Request model for creating a customer
    """
    
    customer_contract_type: NewCustomerRequestCustomerContractTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerContractType') }})
    first_admin_user: FirstAdminUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstAdminUser') }})
    quota_max: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaMax') }})
    user_max: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userMax') }})
    activation_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationCode') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    customer_attributes: Optional[CustomerAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerAttributes') }})
    is_locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLocked') }})
    lock_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    provider_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerCustomerId') }})
    trial_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialDays') }})
    webhooks_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooksMax') }})
    
