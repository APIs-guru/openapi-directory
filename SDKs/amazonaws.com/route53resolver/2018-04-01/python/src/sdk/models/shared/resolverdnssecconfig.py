from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resolverdnssecvalidationstatus_enum


@dataclass_json
@dataclass
class ResolverDnssecConfig:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerId' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    validation_status: Optional[resolverdnssecvalidationstatus_enum.ResolverDnssecValidationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationStatus' }})
    
