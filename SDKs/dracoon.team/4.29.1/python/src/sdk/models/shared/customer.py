from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CustomerCustomerContractTypeEnum(str, Enum):
    DEMO = "demo"
    FREE = "free"
    PAY = "pay"


@dataclass_json
@dataclass
class Customer:
    r"""Customer
    Customer information
    """
    
    company_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    customer_contract_type: CustomerCustomerContractTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerContractType') }})
    customer_uuid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerUuid') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lock_status: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    quota_max: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaMax') }})
    quota_used: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaUsed') }})
    user_max: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userMax') }})
    user_used: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userUsed') }})
    activation_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationCode') }})
    customer_attributes: Optional[CustomerAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerAttributes') }})
    is_locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLocked') }})
    last_login_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastLoginAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    provider_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerCustomerId') }})
    trial_days_left: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialDaysLeft') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    webhooks_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooksMax') }})
    
