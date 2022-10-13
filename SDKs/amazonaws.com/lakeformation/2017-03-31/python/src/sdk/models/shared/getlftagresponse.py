from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetLfTagResponse:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    tag_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagKey' }})
    tag_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagValues' }})
    
