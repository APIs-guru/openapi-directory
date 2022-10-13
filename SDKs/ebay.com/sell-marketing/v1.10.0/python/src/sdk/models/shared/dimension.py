from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Dimension:
    annotation_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationKeys' }})
    dimension_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionKey' }})
    
