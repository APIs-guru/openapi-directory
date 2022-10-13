from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import targetidtype_enum


@dataclass_json
@dataclass
class Summary:
    last_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdated' }})
    non_compliant_resources: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonCompliantResources' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetId' }})
    target_id_type: Optional[targetidtype_enum.TargetIDTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetIdType' }})
    
