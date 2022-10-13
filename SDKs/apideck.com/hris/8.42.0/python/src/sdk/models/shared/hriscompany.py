from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class HrisCompanyStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    TRIAL = "trial"
    OTHER = "other"


@dataclass_json
@dataclass
class HrisCompany:
    addresses: Optional[List[shared.Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    company_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_number' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    debtor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debtor_id' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    emails: Optional[List[shared.Email]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    legal_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legal_name' }})
    phone_numbers: Optional[List[shared.PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_numbers' }})
    status: Optional[HrisCompanyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subdomain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subdomain' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    websites: Optional[List[shared.Website]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websites' }})
    
