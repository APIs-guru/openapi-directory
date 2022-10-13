from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudApigeeV1EntityMetadata:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    last_modified_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedAt' }})
    sub_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subType' }})
    
