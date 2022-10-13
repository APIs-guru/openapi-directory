from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import entitlementunit_enum


@dataclass_json
@dataclass
class Entitlement:
    allow_check_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowCheckIn' }})
    max_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxCount' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    overage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Overage' }})
    unit: entitlementunit_enum.EntitlementUnitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unit' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
