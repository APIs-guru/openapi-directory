from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UpdateCustomerRequestCustomerContractTypeEnum(str, Enum):
    DEMO = "demo"
    FREE = "free"
    PAY = "pay"


@dataclass_json
@dataclass
class UpdateCustomerRequest:
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    customer_contract_type: UpdateCustomerRequestCustomerContractTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerContractType' }})
    is_locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLocked' }})
    lock_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockStatus' }})
    provider_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerCustomerId' }})
    quota_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaMax' }})
    user_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userMax' }})
    webhooks_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhooksMax' }})
    
