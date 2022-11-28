from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UpdateCustomerResponseCustomerContractTypeEnum(str, Enum):
    DEMO = "demo"
    FREE = "free"
    PAY = "pay"


@dataclass_json
@dataclass
class UpdateCustomerResponse:
    r"""UpdateCustomerResponse
    Customer information
    """
    
    company_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    customer_contract_type: UpdateCustomerResponseCustomerContractTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerContractType') }})
    customer_uuid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerUuid') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lock_status: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    quota_max: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaMax') }})
    user_max: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userMax') }})
    activation_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationCode') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    customer_attributes: Optional[CustomerAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerAttributes') }})
    is_locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLocked') }})
    provider_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerCustomerId') }})
    trial_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialDays') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    webhooks_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooksMax') }})
    
