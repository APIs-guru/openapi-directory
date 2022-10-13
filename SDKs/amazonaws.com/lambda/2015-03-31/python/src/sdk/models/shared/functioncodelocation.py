from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FunctionCodeLocation:
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageUri' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    repository_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepositoryType' }})
    resolved_image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolvedImageUri' }})
    
