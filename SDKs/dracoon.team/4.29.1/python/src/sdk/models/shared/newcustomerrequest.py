from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import customerattributes
from . import firstadminuser

class NewCustomerRequestCustomerContractTypeEnum(str, Enum):
    DEMO = "demo"
    FREE = "free"
    PAY = "pay"


@dataclass_json
@dataclass
class NewCustomerRequest:
    activation_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activationCode' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    customer_attributes: Optional[customerattributes.CustomerAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerAttributes' }})
    customer_contract_type: NewCustomerRequestCustomerContractTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerContractType' }})
    first_admin_user: firstadminuser.FirstAdminUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstAdminUser' }})
    is_locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLocked' }})
    lock_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockStatus' }})
    provider_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerCustomerId' }})
    quota_max: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaMax' }})
    trial_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialDays' }})
    user_max: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userMax' }})
    webhooks_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhooksMax' }})
    
