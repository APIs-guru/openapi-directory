from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resourcetype_enum


@dataclass_json
@dataclass
class ConsumedLicenseSummary:
    consumed_licenses: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumedLicenses' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    
