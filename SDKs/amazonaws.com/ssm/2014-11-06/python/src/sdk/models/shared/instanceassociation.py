from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstanceAssociation:
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationId' }})
    association_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationVersion' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    
