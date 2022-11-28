from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UpdateCustomerRequestCustomerContractTypeEnum(str, Enum):
    DEMO = "demo"
    FREE = "free"
    PAY = "pay"


@dataclass_json
@dataclass
class UpdateCustomerRequest:
    r"""UpdateCustomerRequest
    Request model for updating a customer
    """
    
    customer_contract_type: UpdateCustomerRequestCustomerContractTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerContractType') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    is_locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLocked') }})
    lock_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    provider_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerCustomerId') }})
    quota_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaMax') }})
    user_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userMax') }})
    webhooks_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooksMax') }})
    
