from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import schema


@dataclass_json
@dataclass
class Schemas:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    schemas: Optional[List[schema.Schema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    
