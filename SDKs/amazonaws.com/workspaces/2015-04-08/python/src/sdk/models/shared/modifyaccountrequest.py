from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dedicatedtenancysupportenum_enum


@dataclass_json
@dataclass
class ModifyAccountRequest:
    dedicated_tenancy_management_cidr_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DedicatedTenancyManagementCidrRange' }})
    dedicated_tenancy_support: Optional[dedicatedtenancysupportenum_enum.DedicatedTenancySupportEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DedicatedTenancySupport' }})
    
