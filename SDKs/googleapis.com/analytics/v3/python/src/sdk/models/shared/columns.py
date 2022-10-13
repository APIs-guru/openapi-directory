from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import column


@dataclass_json
@dataclass
class Columns:
    attribute_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeNames' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    items: Optional[List[column.Column]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    
