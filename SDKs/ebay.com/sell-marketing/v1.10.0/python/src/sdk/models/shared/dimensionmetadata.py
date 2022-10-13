from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensionkeyannotation


@dataclass_json
@dataclass
class DimensionMetadata:
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    dimension_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionKey' }})
    dimension_key_annotations: Optional[List[dimensionkeyannotation.DimensionKeyAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionKeyAnnotations' }})
    
