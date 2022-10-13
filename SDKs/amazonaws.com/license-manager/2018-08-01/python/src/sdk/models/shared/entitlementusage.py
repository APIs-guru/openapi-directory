from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import entitlementdataunit_enum


@dataclass_json
@dataclass
class EntitlementUsage:
    consumed_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumedValue' }})
    max_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxCount' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    unit: entitlementdataunit_enum.EntitlementDataUnitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unit' }})
    
