from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation:
    attach_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    security_profile_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProfileRevisionId' }})
    
