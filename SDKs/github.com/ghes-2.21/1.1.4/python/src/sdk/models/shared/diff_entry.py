from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DiffEntry:
    additions: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additions' }})
    blob_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blob_url' }})
    changes: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changes' }})
    contents_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contents_url' }})
    deletions: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletions' }})
    filename: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    patch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patch' }})
    previous_filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_filename' }})
    raw_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raw_url' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
