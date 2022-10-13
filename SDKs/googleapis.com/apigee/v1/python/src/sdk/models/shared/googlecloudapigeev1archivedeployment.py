from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ArchiveDeployment:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsUri' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt' }})
    
