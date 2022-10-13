from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScimError:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    schemas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    scim_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scimType' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
