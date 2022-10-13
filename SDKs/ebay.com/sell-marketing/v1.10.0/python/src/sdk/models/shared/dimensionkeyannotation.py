from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DimensionKeyAnnotation:
    annotation_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationKey' }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    
