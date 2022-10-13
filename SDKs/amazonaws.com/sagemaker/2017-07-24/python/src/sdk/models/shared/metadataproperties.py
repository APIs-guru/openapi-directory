from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetadataProperties:
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommitId' }})
    generated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeneratedBy' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectId' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Repository' }})
    
