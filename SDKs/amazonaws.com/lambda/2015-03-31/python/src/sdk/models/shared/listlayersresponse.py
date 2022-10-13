from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import layerslistitem


@dataclass_json
@dataclass
class ListLayersResponse:
    layers: Optional[List[layerslistitem.LayersListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Layers' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    
