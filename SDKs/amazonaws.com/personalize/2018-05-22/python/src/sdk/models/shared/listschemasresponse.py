from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasetschemasummary


@dataclass_json
@dataclass
class ListSchemasResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    schemas: Optional[List[datasetschemasummary.DatasetSchemaSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    
