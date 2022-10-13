from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import customerattributes

class UpdateCustomerResponseCustomerContractTypeEnum(str, Enum):
    DEMO = "demo"
    FREE = "free"
    PAY = "pay"


@dataclass_json
@dataclass
class UpdateCustomerResponse:
    activation_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activationCode' }})
    company_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    customer_attributes: Optional[customerattributes.CustomerAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerAttributes' }})
    customer_contract_type: UpdateCustomerResponseCustomerContractTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerContractType' }})
    customer_uuid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerUuid' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLocked' }})
    lock_status: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockStatus' }})
    provider_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerCustomerId' }})
    quota_max: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaMax' }})
    trial_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialDays' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_max: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userMax' }})
    webhooks_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhooksMax' }})
    
