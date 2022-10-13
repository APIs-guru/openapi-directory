from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dedicatedtenancysupportresultenum_enum


@dataclass_json
@dataclass
class DescribeAccountResult:
    dedicated_tenancy_management_cidr_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DedicatedTenancyManagementCidrRange' }})
    dedicated_tenancy_support: Optional[dedicatedtenancysupportresultenum_enum.DedicatedTenancySupportResultEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DedicatedTenancySupport' }})
    
