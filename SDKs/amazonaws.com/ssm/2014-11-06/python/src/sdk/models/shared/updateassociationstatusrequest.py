from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import associationstatus


@dataclass_json
@dataclass
class UpdateAssociationStatusRequest:
    association_status: associationstatus.AssociationStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationStatus' }})
    instance_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
