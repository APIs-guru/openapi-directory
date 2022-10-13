from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteDocumentRequest:
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Force' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionName' }})
    
