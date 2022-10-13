from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EntitySummary:
    entity_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityArn' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityId' }})
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityType' }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    visibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Visibility' }})
    
