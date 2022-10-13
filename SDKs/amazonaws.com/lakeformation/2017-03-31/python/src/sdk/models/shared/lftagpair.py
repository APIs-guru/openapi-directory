from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LfTagPair:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    tag_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagKey' }})
    tag_values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagValues' }})
    
