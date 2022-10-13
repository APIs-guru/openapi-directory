from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dedicatedtenancysupportresultenum_enum
from . import dedicatedtenancymodificationstateenum_enum


@dataclass_json
@dataclass
class AccountModification:
    dedicated_tenancy_management_cidr_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DedicatedTenancyManagementCidrRange' }})
    dedicated_tenancy_support: Optional[dedicatedtenancysupportresultenum_enum.DedicatedTenancySupportResultEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DedicatedTenancySupport' }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    modification_state: Optional[dedicatedtenancymodificationstateenum_enum.DedicatedTenancyModificationStateEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModificationState' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
