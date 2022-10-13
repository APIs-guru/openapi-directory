from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import customerattributes

class CustomerCustomerContractTypeEnum(str, Enum):
    DEMO = "demo"
    FREE = "free"
    PAY = "pay"


@dataclass_json
@dataclass
class Customer:
    activation_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activationCode' }})
    company_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    customer_attributes: Optional[customerattributes.CustomerAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerAttributes' }})
    customer_contract_type: CustomerCustomerContractTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerContractType' }})
    customer_uuid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerUuid' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLocked' }})
    last_login_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastLoginAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lock_status: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockStatus' }})
    provider_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerCustomerId' }})
    quota_max: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaMax' }})
    quota_used: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaUsed' }})
    trial_days_left: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialDaysLeft' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_max: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userMax' }})
    user_used: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userUsed' }})
    webhooks_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhooksMax' }})
    
